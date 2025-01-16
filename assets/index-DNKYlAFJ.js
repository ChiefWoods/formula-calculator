(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const l of s)if(l.type==="childList")for(const a of l.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(s){const l={};return s.integrity&&(l.integrity=s.integrity),s.referrerPolicy&&(l.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?l.credentials="include":s.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(s){if(s.ep)return;s.ep=!0;const l=n(s);fetch(s.href,l)}})();const PUBLIC_VERSION="5";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(PUBLIC_VERSION);let legacy_mode_flag=!1,tracing_mode_flag=!1;function enable_legacy_mode_flag(){legacy_mode_flag=!0}enable_legacy_mode_flag();const EACH_ITEM_REACTIVE=1,EACH_INDEX_REACTIVE=2,EACH_ITEM_IMMUTABLE=16,TEMPLATE_FRAGMENT=1,TEMPLATE_USE_IMPORT_NODE=2,PASSIVE_EVENTS=["touchstart","touchmove"];function is_passive_event(e){return PASSIVE_EVENTS.includes(e)}const DEV=!1;var is_array=Array.isArray,index_of=Array.prototype.indexOf,array_from=Array.from,define_property=Object.defineProperty,get_descriptor=Object.getOwnPropertyDescriptor,get_descriptors=Object.getOwnPropertyDescriptors,get_prototype_of=Object.getPrototypeOf;function run(e){return e()}function run_all(e){for(var t=0;t<e.length;t++)e[t]()}const DERIVED=2,EFFECT=4,RENDER_EFFECT=8,BLOCK_EFFECT=16,BRANCH_EFFECT=32,ROOT_EFFECT=64,BOUNDARY_EFFECT=128,UNOWNED=256,DISCONNECTED=512,CLEAN=1024,DIRTY=2048,MAYBE_DIRTY=4096,INERT=8192,DESTROYED=16384,EFFECT_RAN=32768,EFFECT_TRANSPARENT=65536,HEAD_EFFECT=1<<19,EFFECT_HAS_DERIVED=1<<20,STATE_SYMBOL=Symbol("$state"),LOADING_ATTR_SYMBOL=Symbol("");function equals(e){return e===this.v}function safe_not_equal(e,t){return e!=e?t==t:e!==t||e!==null&&typeof e=="object"||typeof e=="function"}function safe_equals(e){return!safe_not_equal(e,this.v)}function effect_in_teardown(e){throw new Error("https://svelte.dev/e/effect_in_teardown")}function effect_in_unowned_derived(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function effect_orphan(e){throw new Error("https://svelte.dev/e/effect_orphan")}function effect_update_depth_exceeded(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function state_unsafe_local_read(){throw new Error("https://svelte.dev/e/state_unsafe_local_read")}function state_unsafe_mutation(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}function source(e,t){var n={f:0,v:e,reactions:null,equals,rv:0,wv:0};return n}function mutable_source(e,t=!1){var i;const n=source(e);return t||(n.equals=safe_equals),legacy_mode_flag&&component_context!==null&&component_context.l!==null&&((i=component_context.l).s??(i.s=[])).push(n),n}function mutable_state(e,t=!1){return push_derived_source(mutable_source(e,t))}function push_derived_source(e){return active_reaction!==null&&active_reaction.f&DERIVED&&(derived_sources===null?set_derived_sources([e]):derived_sources.push(e)),e}function set(e,t){return active_reaction!==null&&is_runes()&&active_reaction.f&(DERIVED|BLOCK_EFFECT)&&(derived_sources===null||!derived_sources.includes(e))&&state_unsafe_mutation(),internal_set(e,t)}function internal_set(e,t){return e.equals(t)||(e.v,e.v=t,e.wv=increment_write_version(),mark_reactions(e,DIRTY),is_runes()&&active_effect!==null&&active_effect.f&CLEAN&&!(active_effect.f&(BRANCH_EFFECT|ROOT_EFFECT))&&(untracked_writes===null?set_untracked_writes([e]):untracked_writes.push(e))),t}function mark_reactions(e,t){var n=e.reactions;if(n!==null)for(var i=is_runes(),s=n.length,l=0;l<s;l++){var a=n[l],_=a.f;_&DIRTY||!i&&a===active_effect||(set_signal_status(a,t),_&(CLEAN|UNOWNED)&&(_&DERIVED?mark_reactions(a,MAYBE_DIRTY):schedule_effect(a)))}}let hydrating=!1;var $window,first_child_getter,next_sibling_getter;function init_operations(){if($window===void 0){$window=window;var e=Element.prototype,t=Node.prototype;first_child_getter=get_descriptor(t,"firstChild").get,next_sibling_getter=get_descriptor(t,"nextSibling").get,e.__click=void 0,e.__className="",e.__attributes=null,e.__styles=null,e.__e=void 0,Text.prototype.__t=void 0}}function create_text(e=""){return document.createTextNode(e)}function get_first_child(e){return first_child_getter.call(e)}function get_next_sibling(e){return next_sibling_getter.call(e)}function child(e,t){return get_first_child(e)}function first_child(e,t){{var n=get_first_child(e);return n instanceof Comment&&n.data===""?get_next_sibling(n):n}}function sibling(e,t=1,n=!1){let i=e;for(;t--;)i=get_next_sibling(i);return i}function clear_text_content(e){e.textContent=""}function derived(e){var t=DERIVED|DIRTY;active_effect===null?t|=UNOWNED:active_effect.f|=EFFECT_HAS_DERIVED;var n=active_reaction!==null&&active_reaction.f&DERIVED?active_reaction:null;const i={children:null,ctx:component_context,deps:null,equals,f:t,fn:e,reactions:null,rv:0,v:null,wv:0,parent:n??active_effect};return n!==null&&(n.children??(n.children=[])).push(i),i}function derived_safe_equal(e){const t=derived(e);return t.equals=safe_equals,t}function destroy_derived_children(e){var t=e.children;if(t!==null){e.children=null;for(var n=0;n<t.length;n+=1){var i=t[n];i.f&DERIVED?destroy_derived(i):destroy_effect(i)}}}function get_derived_parent_effect(e){for(var t=e.parent;t!==null;){if(!(t.f&DERIVED))return t;t=t.parent}return null}function execute_derived(e){var t,n=active_effect;set_active_effect(get_derived_parent_effect(e));try{destroy_derived_children(e),t=update_reaction(e)}finally{set_active_effect(n)}return t}function update_derived(e){var t=execute_derived(e),n=(skip_reaction||e.f&UNOWNED)&&e.deps!==null?MAYBE_DIRTY:CLEAN;set_signal_status(e,n),e.equals(t)||(e.v=t,e.wv=increment_write_version())}function destroy_derived(e){destroy_derived_children(e),remove_reactions(e,0),set_signal_status(e,DESTROYED),e.v=e.children=e.deps=e.ctx=e.reactions=null}function validate_effect(e){active_effect===null&&active_reaction===null&&effect_orphan(),active_reaction!==null&&active_reaction.f&UNOWNED&&effect_in_unowned_derived(),is_destroying_effect&&effect_in_teardown()}function push_effect(e,t){var n=t.last;n===null?t.last=t.first=e:(n.next=e,e.prev=n,t.last=e)}function create_effect(e,t,n,i=!0){var s=(e&ROOT_EFFECT)!==0,l=active_effect,a={ctx:component_context,deps:null,deriveds:null,nodes_start:null,nodes_end:null,f:e|DIRTY,first:null,fn:t,last:null,next:null,parent:s?null:l,prev:null,teardown:null,transitions:null,wv:0};if(n){var _=is_flushing_effect;try{set_is_flushing_effect(!0),update_effect(a),a.f|=EFFECT_RAN}catch(h){throw destroy_effect(a),h}finally{set_is_flushing_effect(_)}}else t!==null&&schedule_effect(a);var c=n&&a.deps===null&&a.first===null&&a.nodes_start===null&&a.teardown===null&&(a.f&(EFFECT_HAS_DERIVED|BOUNDARY_EFFECT))===0;if(!c&&!s&&i&&(l!==null&&push_effect(a,l),active_reaction!==null&&active_reaction.f&DERIVED)){var u=active_reaction;(u.children??(u.children=[])).push(a)}return a}function teardown(e){const t=create_effect(RENDER_EFFECT,null,!1);return set_signal_status(t,CLEAN),t.teardown=e,t}function user_effect(e){validate_effect();var t=active_effect!==null&&(active_effect.f&BRANCH_EFFECT)!==0&&component_context!==null&&!component_context.m;if(t){var n=component_context;(n.e??(n.e=[])).push({fn:e,effect:active_effect,reaction:active_reaction})}else{var i=effect(e);return i}}function user_pre_effect(e){return validate_effect(),render_effect(e)}function component_root(e){const t=create_effect(ROOT_EFFECT,e,!0);return(n={})=>new Promise(i=>{n.outro?pause_effect(t,()=>{destroy_effect(t),i(void 0)}):(destroy_effect(t),i(void 0))})}function effect(e){return create_effect(EFFECT,e,!1)}function render_effect(e){return create_effect(RENDER_EFFECT,e,!0)}function template_effect(e){return block(e)}function block(e,t=0){return create_effect(RENDER_EFFECT|BLOCK_EFFECT|t,e,!0)}function branch(e,t=!0){return create_effect(RENDER_EFFECT|BRANCH_EFFECT,e,!0,t)}function execute_effect_teardown(e){var t=e.teardown;if(t!==null){const n=is_destroying_effect,i=active_reaction;set_is_destroying_effect(!0),set_active_reaction(null);try{t.call(null)}finally{set_is_destroying_effect(n),set_active_reaction(i)}}}function destroy_effect_deriveds(e){var t=e.deriveds;if(t!==null){e.deriveds=null;for(var n=0;n<t.length;n+=1)destroy_derived(t[n])}}function destroy_effect_children(e,t=!1){var n=e.first;for(e.first=e.last=null;n!==null;){var i=n.next;destroy_effect(n,t),n=i}}function destroy_block_effect_children(e){for(var t=e.first;t!==null;){var n=t.next;t.f&BRANCH_EFFECT||destroy_effect(t),t=n}}function destroy_effect(e,t=!0){var n=!1;if((t||e.f&HEAD_EFFECT)&&e.nodes_start!==null){for(var i=e.nodes_start,s=e.nodes_end;i!==null;){var l=i===s?null:get_next_sibling(i);i.remove(),i=l}n=!0}destroy_effect_children(e,t&&!n),destroy_effect_deriveds(e),remove_reactions(e,0),set_signal_status(e,DESTROYED);var a=e.transitions;if(a!==null)for(const c of a)c.stop();execute_effect_teardown(e);var _=e.parent;_!==null&&_.first!==null&&unlink_effect(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.fn=e.nodes_start=e.nodes_end=null}function unlink_effect(e){var t=e.parent,n=e.prev,i=e.next;n!==null&&(n.next=i),i!==null&&(i.prev=n),t!==null&&(t.first===e&&(t.first=i),t.last===e&&(t.last=n))}function pause_effect(e,t){var n=[];pause_children(e,n,!0),run_out_transitions(n,()=>{destroy_effect(e),t&&t()})}function run_out_transitions(e,t){var n=e.length;if(n>0){var i=()=>--n||t();for(var s of e)s.out(i)}else t()}function pause_children(e,t,n){if(!(e.f&INERT)){if(e.f^=INERT,e.transitions!==null)for(const a of e.transitions)(a.is_global||n)&&t.push(a);for(var i=e.first;i!==null;){var s=i.next,l=(i.f&EFFECT_TRANSPARENT)!==0||(i.f&BRANCH_EFFECT)!==0;pause_children(i,t,l?n:!1),i=s}}}function resume_effect(e){resume_children(e,!0)}function resume_children(e,t){if(e.f&INERT){e.f^=INERT,e.f&CLEAN||(e.f^=CLEAN),check_dirtiness(e)&&(set_signal_status(e,DIRTY),schedule_effect(e));for(var n=e.first;n!==null;){var i=n.next,s=(n.f&EFFECT_TRANSPARENT)!==0||(n.f&BRANCH_EFFECT)!==0;resume_children(n,s?t:!1),n=i}if(e.transitions!==null)for(const l of e.transitions)(l.is_global||t)&&l.in()}}let is_micro_task_queued$1=!1,current_queued_micro_tasks=[];function process_micro_tasks(){is_micro_task_queued$1=!1;const e=current_queued_micro_tasks.slice();current_queued_micro_tasks=[],run_all(e)}function queue_micro_task(e){is_micro_task_queued$1||(is_micro_task_queued$1=!0,queueMicrotask(process_micro_tasks)),current_queued_micro_tasks.push(e)}let is_throwing_error=!1,is_micro_task_queued=!1,last_scheduled_effect=null,is_flushing_effect=!1,is_destroying_effect=!1;function set_is_flushing_effect(e){is_flushing_effect=e}function set_is_destroying_effect(e){is_destroying_effect=e}let queued_root_effects=[],flush_count=0,dev_effect_stack=[],active_reaction=null;function set_active_reaction(e){active_reaction=e}let active_effect=null;function set_active_effect(e){active_effect=e}let derived_sources=null;function set_derived_sources(e){derived_sources=e}let new_deps=null,skipped_deps=0,untracked_writes=null;function set_untracked_writes(e){untracked_writes=e}let write_version=1,read_version=0,skip_reaction=!1,component_context=null;function increment_write_version(){return++write_version}function is_runes(){return!legacy_mode_flag||component_context!==null&&component_context.l===null}function check_dirtiness(e){var u;var t=e.f;if(t&DIRTY)return!0;if(t&MAYBE_DIRTY){var n=e.deps,i=(t&UNOWNED)!==0;if(n!==null){var s,l,a=(t&DISCONNECTED)!==0,_=i&&active_effect!==null&&!skip_reaction,c=n.length;if(a||_){for(s=0;s<c;s++)l=n[s],(a||!((u=l==null?void 0:l.reactions)!=null&&u.includes(e)))&&(l.reactions??(l.reactions=[])).push(e);a&&(e.f^=DISCONNECTED)}for(s=0;s<c;s++)if(l=n[s],check_dirtiness(l)&&update_derived(l),l.wv>e.wv)return!0}(!i||active_effect!==null&&!skip_reaction)&&set_signal_status(e,CLEAN)}return!1}function propagate_error(e,t){for(var n=t;n!==null;){if(n.f&BOUNDARY_EFFECT)try{n.fn(e);return}catch{n.f^=BOUNDARY_EFFECT}n=n.parent}throw is_throwing_error=!1,e}function should_rethrow_error(e){return(e.f&DESTROYED)===0&&(e.parent===null||(e.parent.f&BOUNDARY_EFFECT)===0)}function handle_error(e,t,n,i){if(is_throwing_error){if(n===null&&(is_throwing_error=!1),should_rethrow_error(t))throw e;return}n!==null&&(is_throwing_error=!0);{propagate_error(e,t);return}}function schedule_possible_effect_self_invalidation(e,t,n=0){var i=e.reactions;if(i!==null)for(var s=0;s<i.length;s++){var l=i[s];l.f&DERIVED?schedule_possible_effect_self_invalidation(l,t,n+1):t===l&&(n===0?set_signal_status(l,DIRTY):l.f&CLEAN&&set_signal_status(l,MAYBE_DIRTY),schedule_effect(l))}}function update_reaction(e){var f;var t=new_deps,n=skipped_deps,i=untracked_writes,s=active_reaction,l=skip_reaction,a=derived_sources,_=component_context,c=e.f;new_deps=null,skipped_deps=0,untracked_writes=null,active_reaction=c&(BRANCH_EFFECT|ROOT_EFFECT)?null:e,skip_reaction=!is_flushing_effect&&(c&UNOWNED)!==0,derived_sources=null,component_context=e.ctx,read_version++;try{var u=(0,e.fn)(),h=e.deps;if(new_deps!==null){var o;if(remove_reactions(e,skipped_deps),h!==null&&skipped_deps>0)for(h.length=skipped_deps+new_deps.length,o=0;o<new_deps.length;o++)h[skipped_deps+o]=new_deps[o];else e.deps=h=new_deps;if(!skip_reaction)for(o=skipped_deps;o<h.length;o++)((f=h[o]).reactions??(f.reactions=[])).push(e)}else h!==null&&skipped_deps<h.length&&(remove_reactions(e,skipped_deps),h.length=skipped_deps);if(is_runes()&&untracked_writes!==null&&!(e.f&(DERIVED|MAYBE_DIRTY|DIRTY)))for(o=0;o<untracked_writes.length;o++)schedule_possible_effect_self_invalidation(untracked_writes[o],e);return s!==null&&read_version++,u}finally{new_deps=t,skipped_deps=n,untracked_writes=i,active_reaction=s,skip_reaction=l,derived_sources=a,component_context=_}}function remove_reaction(e,t){let n=t.reactions;if(n!==null){var i=index_of.call(n,e);if(i!==-1){var s=n.length-1;s===0?n=t.reactions=null:(n[i]=n[s],n.pop())}}n===null&&t.f&DERIVED&&(new_deps===null||!new_deps.includes(t))&&(set_signal_status(t,MAYBE_DIRTY),t.f&(UNOWNED|DISCONNECTED)||(t.f^=DISCONNECTED),remove_reactions(t,0))}function remove_reactions(e,t){var n=e.deps;if(n!==null)for(var i=t;i<n.length;i++)remove_reaction(e,n[i])}function update_effect(e){var t=e.f;if(!(t&DESTROYED)){set_signal_status(e,CLEAN);var n=active_effect,i=component_context;active_effect=e;try{t&BLOCK_EFFECT?destroy_block_effect_children(e):destroy_effect_children(e),destroy_effect_deriveds(e),execute_effect_teardown(e);var s=update_reaction(e);e.teardown=typeof s=="function"?s:null,e.wv=write_version;var l=e.deps,a;DEV&&tracing_mode_flag&&e.f&DIRTY}catch(_){handle_error(_,e,n,i||e.ctx)}finally{active_effect=n}}}function infinite_loop_guard(){if(flush_count>1e3){flush_count=0;try{effect_update_depth_exceeded()}catch(e){if(last_scheduled_effect!==null)handle_error(e,last_scheduled_effect,null);else throw e}}flush_count++}function flush_queued_root_effects(e){var t=e.length;if(t!==0){infinite_loop_guard();var n=is_flushing_effect;is_flushing_effect=!0;try{for(var i=0;i<t;i++){var s=e[i];s.f&CLEAN||(s.f^=CLEAN);var l=[];process_effects(s,l),flush_queued_effects(l)}}finally{is_flushing_effect=n}}}function flush_queued_effects(e){var t=e.length;if(t!==0)for(var n=0;n<t;n++){var i=e[n];if(!(i.f&(DESTROYED|INERT)))try{check_dirtiness(i)&&(update_effect(i),i.deps===null&&i.first===null&&i.nodes_start===null&&(i.teardown===null?unlink_effect(i):i.fn=null))}catch(s){handle_error(s,i,null,i.ctx)}}}function process_deferred(){if(is_micro_task_queued=!1,flush_count>1001)return;const e=queued_root_effects;queued_root_effects=[],flush_queued_root_effects(e),is_micro_task_queued||(flush_count=0,last_scheduled_effect=null)}function schedule_effect(e){is_micro_task_queued||(is_micro_task_queued=!0,queueMicrotask(process_deferred)),last_scheduled_effect=e;for(var t=e;t.parent!==null;){t=t.parent;var n=t.f;if(n&(ROOT_EFFECT|BRANCH_EFFECT)){if(!(n&CLEAN))return;t.f^=CLEAN}}queued_root_effects.push(t)}function process_effects(e,t){var n=e.first,i=[];e:for(;n!==null;){var s=n.f,l=(s&BRANCH_EFFECT)!==0,a=l&&(s&CLEAN)!==0,_=n.next;if(!a&&!(s&INERT))if(s&RENDER_EFFECT){if(l)n.f^=CLEAN;else try{check_dirtiness(n)&&update_effect(n)}catch(o){handle_error(o,n,null,n.ctx)}var c=n.first;if(c!==null){n=c;continue}}else s&EFFECT&&i.push(n);if(_===null){let o=n.parent;for(;o!==null;){if(e===o)break e;var u=o.next;if(u!==null){n=u;continue e}o=o.parent}}n=_}for(var h=0;h<i.length;h++)c=i[h],t.push(c),process_effects(c,t)}function get(e){var h;var t=e.f,n=(t&DERIVED)!==0;if(n&&t&DESTROYED){var i=execute_derived(e);return destroy_derived(e),i}if(active_reaction!==null){derived_sources!==null&&derived_sources.includes(e)&&state_unsafe_local_read();var s=active_reaction.deps;e.rv<read_version&&(e.rv=read_version,new_deps===null&&s!==null&&s[skipped_deps]===e?skipped_deps++:new_deps===null?new_deps=[e]:new_deps.push(e))}else if(n&&e.deps===null)for(var l=e,a=l.parent,_=l;a!==null;)if(a.f&DERIVED){var c=a;_=c,a=c.parent}else{var u=a;(h=u.deriveds)!=null&&h.includes(_)||(u.deriveds??(u.deriveds=[])).push(_);break}return n&&(l=e,check_dirtiness(l)&&update_derived(l)),e.v}function untrack(e){const t=active_reaction;try{return active_reaction=null,e()}finally{active_reaction=t}}const STATUS_MASK=-7169;function set_signal_status(e,t){e.f=e.f&STATUS_MASK|t}function push(e,t=!1,n){component_context={p:component_context,c:null,e:null,m:!1,s:e,x:null,l:null},legacy_mode_flag&&!t&&(component_context.l={s:null,u:null,r1:[],r2:source(!1)})}function pop(e){const t=component_context;if(t!==null){const a=t.e;if(a!==null){var n=active_effect,i=active_reaction;t.e=null;try{for(var s=0;s<a.length;s++){var l=a[s];set_active_effect(l.effect),set_active_reaction(l.reaction),effect(l.fn)}}finally{set_active_effect(n),set_active_reaction(i)}}component_context=t.p,t.m=!0}return{}}function deep_read_state(e){if(!(typeof e!="object"||!e||e instanceof EventTarget)){if(STATE_SYMBOL in e)deep_read(e);else if(!Array.isArray(e))for(let t in e){const n=e[t];typeof n=="object"&&n&&STATE_SYMBOL in n&&deep_read(n)}}}function deep_read(e,t=new Set){if(typeof e=="object"&&e!==null&&!(e instanceof EventTarget)&&!t.has(e)){t.add(e),e instanceof Date&&e.getTime();for(let i in e)try{deep_read(e[i],t)}catch{}const n=get_prototype_of(e);if(n!==Object.prototype&&n!==Array.prototype&&n!==Map.prototype&&n!==Set.prototype&&n!==Date.prototype){const i=get_descriptors(n);for(let s in i){const l=i[s].get;if(l)try{l.call(e)}catch{}}}}}function without_reactive_context(e){var t=active_reaction,n=active_effect;set_active_reaction(null),set_active_effect(null);try{return e()}finally{set_active_reaction(t),set_active_effect(n)}}const all_registered_events=new Set,root_event_handles=new Set;function create_event(e,t,n,i){function s(l){if(i.capture||handle_event_propagation.call(t,l),!l.cancelBubble)return without_reactive_context(()=>n.call(this,l))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?queue_micro_task(()=>{t.addEventListener(e,s,i)}):t.addEventListener(e,s,i),s}function event(e,t,n,i,s){var l={capture:i,passive:s},a=create_event(e,t,n,l);(t===document.body||t===window||t===document)&&teardown(()=>{t.removeEventListener(e,a,l)})}function delegate(e){for(var t=0;t<e.length;t++)all_registered_events.add(e[t]);for(var n of root_event_handles)n(e)}function handle_event_propagation(e){var g;var t=this,n=t.ownerDocument,i=e.type,s=((g=e.composedPath)==null?void 0:g.call(e))||[],l=s[0]||e.target,a=0,_=e.__root;if(_){var c=s.indexOf(_);if(c!==-1&&(t===document||t===window)){e.__root=t;return}var u=s.indexOf(t);if(u===-1)return;c<=u&&(a=c)}if(l=s[a]||e.target,l!==t){define_property(e,"currentTarget",{configurable:!0,get(){return l||n}});var h=active_reaction,o=active_effect;set_active_reaction(null),set_active_effect(null);try{for(var f,d=[];l!==null;){var v=l.assignedSlot||l.parentNode||l.host||null;try{var E=l["__"+i];if(E!==void 0&&!l.disabled)if(is_array(E)){var[y,...w]=E;y.apply(l,[e,...w])}else E.call(l,e)}catch(m){f?d.push(m):f=m}if(e.cancelBubble||v===t||v===null)break;l=v}if(f){for(let m of d)queueMicrotask(()=>{throw m});throw f}}finally{e.__root=t,delete e.currentTarget,set_active_reaction(h),set_active_effect(o)}}}function create_fragment_from_html(e){var t=document.createElement("template");return t.innerHTML=e,t.content}function assign_nodes(e,t){var n=active_effect;n.nodes_start===null&&(n.nodes_start=e,n.nodes_end=t)}function template(e,t){var n=(t&TEMPLATE_FRAGMENT)!==0,i=(t&TEMPLATE_USE_IMPORT_NODE)!==0,s,l=!e.startsWith("<!>");return()=>{s===void 0&&(s=create_fragment_from_html(l?e:"<!>"+e),n||(s=get_first_child(s)));var a=i?document.importNode(s,!0):s.cloneNode(!0);if(n){var _=get_first_child(a),c=a.lastChild;assign_nodes(_,c)}else assign_nodes(a,a);return a}}function append(e,t){e!==null&&e.before(t)}function set_text(e,t){var n=t==null?"":typeof t=="object"?t+"":t;n!==(e.__t??(e.__t=e.nodeValue))&&(e.__t=n,e.nodeValue=n==null?"":n+"")}function mount(e,t){return _mount(e,t)}const document_listeners=new Map;function _mount(e,{target:t,anchor:n,props:i={},events:s,context:l,intro:a=!0}){init_operations();var _=new Set,c=o=>{for(var f=0;f<o.length;f++){var d=o[f];if(!_.has(d)){_.add(d);var v=is_passive_event(d);t.addEventListener(d,handle_event_propagation,{passive:v});var E=document_listeners.get(d);E===void 0?(document.addEventListener(d,handle_event_propagation,{passive:v}),document_listeners.set(d,1)):document_listeners.set(d,E+1)}}};c(array_from(all_registered_events)),root_event_handles.add(c);var u=void 0,h=component_root(()=>{var o=n??t.appendChild(create_text());return branch(()=>{if(l){push({});var f=component_context;f.c=l}s&&(i.$$events=s),u=e(o,i)||{},l&&pop()}),()=>{var v;for(var f of _){t.removeEventListener(f,handle_event_propagation);var d=document_listeners.get(f);--d===0?(document.removeEventListener(f,handle_event_propagation),document_listeners.delete(f)):document_listeners.set(f,d)}root_event_handles.delete(c),o!==n&&((v=o.parentNode)==null||v.removeChild(o))}});return mounted_components.set(u,h),u}let mounted_components=new WeakMap;function index(e,t){return t}function pause_effects(e,t,n,i){for(var s=[],l=t.length,a=0;a<l;a++)pause_children(t[a].e,s,!0);var _=l>0&&s.length===0&&n!==null;if(_){var c=n.parentNode;clear_text_content(c),c.append(n),i.clear(),link(e,t[0].prev,t[l-1].next)}run_out_transitions(s,()=>{for(var u=0;u<l;u++){var h=t[u];_||(i.delete(h.k),link(e,h.prev,h.next)),destroy_effect(h.e,!_)}})}function each(e,t,n,i,s,l=null){var a=e,_={flags:t,items:new Map,first:null};{var c=e;a=c.appendChild(create_text())}var u=null,h=!1,o=derived_safe_equal(()=>{var f=n();return is_array(f)?f:f==null?[]:array_from(f)});block(()=>{var f=get(o),d=f.length;if(!(h&&d===0)){h=d===0;{var v=active_reaction;reconcile(f,_,a,s,t,(v.f&INERT)!==0,i)}l!==null&&(d===0?u?resume_effect(u):u=branch(()=>l(a)):u!==null&&pause_effect(u,()=>{u=null})),get(o)}})}function reconcile(e,t,n,i,s,l,a,_){var c=e.length,u=t.items,h=t.first,o=h,f,d=null,v=[],E=[],y,w,g,m;for(m=0;m<c;m+=1){if(y=e[m],w=a(y,m),g=u.get(w),g===void 0){var D=o?o.e.nodes_start:n;d=create_item(D,t,d,d===null?t.first:d.next,y,w,m,i,s),u.set(w,d),v=[],E=[],o=d.next;continue}if(update_item(g,y,m),g.e.f&INERT&&resume_effect(g.e),g!==o){if(f!==void 0&&f.has(g)){if(v.length<E.length){var N=E[0],k;d=N.prev;var R=v[0],T=v[v.length-1];for(k=0;k<v.length;k+=1)move(v[k],N,n);for(k=0;k<E.length;k+=1)f.delete(E[k]);link(t,R.prev,T.next),link(t,d,R),link(t,T,N),o=N,d=T,m-=1,v=[],E=[]}else f.delete(g),move(g,o,n),link(t,g.prev,g.next),link(t,g,d===null?t.first:d.next),link(t,d,g),d=g;continue}for(v=[],E=[];o!==null&&o.k!==w;)(l||!(o.e.f&INERT))&&(f??(f=new Set)).add(o),E.push(o),o=o.next;if(o===null)continue;g=o}v.push(g),d=g,o=g.next}if(o!==null||f!==void 0){for(var C=f===void 0?[]:array_from(f);o!==null;)(l||!(o.e.f&INERT))&&C.push(o),o=o.next;var b=C.length;if(b>0){var F=c===0?n:null;pause_effects(t,C,F,u)}}active_effect.first=t.first&&t.first.e,active_effect.last=d&&d.e}function update_item(e,t,n,i){internal_set(e.v,t),e.i=n}function create_item(e,t,n,i,s,l,a,_,c,u){var h=(c&EACH_ITEM_REACTIVE)!==0,o=(c&EACH_ITEM_IMMUTABLE)===0,f=h?o?mutable_source(s):source(s):s,d=c&EACH_INDEX_REACTIVE?source(a):a,v={i:d,v:f,k:l,a:null,e:null,prev:n,next:i};try{return v.e=branch(()=>_(e,f,d),hydrating),v.e.prev=n&&n.e,v.e.next=i&&i.e,n===null?t.first=v:(n.next=v,n.e.next=v.e),i!==null&&(i.prev=v,i.e.prev=v.e),v}finally{}}function move(e,t,n){for(var i=e.next?e.next.e.nodes_start:n,s=t?t.e.nodes_start:n,l=e.e.nodes_start;l!==i;){var a=get_next_sibling(l);s.before(l),l=a}}function link(e,t,n){t===null?e.first=n:(t.next=n,t.e.next=n&&n.e),n!==null&&(n.prev=t,n.e.prev=t&&t.e)}function html(e,t,n,i,s){var l=e,a="",_;block(()=>{a!==(a=t()??"")&&(_!==void 0&&(destroy_effect(_),_=void 0),a!==""&&(_=branch(()=>{var c=a+"",u=create_fragment_from_html(c);assign_nodes(get_first_child(u),u.lastChild),l.before(u)})))})}function r(e){var t,n,i="";if(typeof e=="string"||typeof e=="number")i+=e;else if(typeof e=="object")if(Array.isArray(e)){var s=e.length;for(t=0;t<s;t++)e[t]&&(n=r(e[t]))&&(i&&(i+=" "),i+=n)}else for(n in e)e[n]&&(i&&(i+=" "),i+=n);return i}function clsx$1(){for(var e,t,n=0,i="",s=arguments.length;n<s;n++)(e=arguments[n])&&(t=r(e))&&(i&&(i+=" "),i+=t);return i}function clsx(e){return typeof e=="object"?clsx$1(e):e??""}function set_attribute(e,t,n,i){var s=e.__attributes??(e.__attributes={});s[t]!==(s[t]=n)&&(t==="style"&&"__styles"in e&&(e.__styles={}),t==="loading"&&(e[LOADING_ATTR_SYMBOL]=n),n==null?e.removeAttribute(t):typeof n!="string"&&get_setters(e).includes(t)?e[t]=n:e.setAttribute(t,n))}var setters_cache=new Map;function get_setters(e){var t=setters_cache.get(e.nodeName);if(t)return t;setters_cache.set(e.nodeName,t=[]);for(var n,i=e,s=Element.prototype;s!==i;){n=get_descriptors(i);for(var l in n)n[l].set&&t.push(l);i=get_prototype_of(i)}return t}function set_class(e,t,n){var i=e.__className,s=to_class(t,n);(i!==s||hydrating)&&(e.className=s,e.__className=s)}function to_class(e,t){return(e??"")+(" "+t)}function init(e=!1){const t=component_context,n=t.l.u;if(!n)return;let i=()=>deep_read_state(t.s);if(e){let s=0,l={};const a=derived(()=>{let _=!1;const c=t.s;for(const u in c)c[u]!==l[u]&&(l[u]=c[u],_=!0);return _&&s++,s});i=()=>get(a)}n.b.length&&user_pre_effect(()=>{observe_all(t,i),run_all(n.b)}),user_effect(()=>{const s=untrack(()=>n.m.map(run));return()=>{for(const l of s)typeof l=="function"&&l()}}),n.a.length&&user_effect(()=>{observe_all(t,i),run_all(n.a)})}function observe_all(e,t){if(e.l.s)for(const n of e.l.s)get(n);t()}function with_parent_branch(e){for(var t=active_effect,n=active_effect;t!==null&&!(t.f&(BRANCH_EFFECT|ROOT_EFFECT));)t=t.parent;try{return set_active_effect(t),e()}finally{set_active_effect(n)}}function prop(e,t,n,i){var s;s=e[t];var l=i,a=!0,_=!1,c=()=>(_=!0,a&&(a=!1,l=i),l),u;u=()=>{var v=e[t];return v===void 0?c():(a=!0,_=!1,v)};var h=!1,o=!1,f=mutable_source(s),d=with_parent_branch(()=>derived(()=>{var v=u(),E=get(f);return h?(h=!1,o=!0,E):(o=!1,f.v=v)}));return function(v,E){if(arguments.length>0){const y=E?get(d):v;return d.equals(y)||(h=!0,set(f,y),_&&l!==void 0&&(l=y),untrack(()=>get(d))),v}return get(d)}}var root$2=template("<button><!></button>");function KeypadBtn(e,t){push(t,!0);let n=prop(t,"className");function i(c){t.onclick(c instanceof MouseEvent?t.content:c.key)}function s(c){t.key.includes(c.key)&&(n(n()+" active"),i(c))}function l(c){t.key.includes(c.key)&&n(n().replace(" active",""))}var a=root$2();event("keydown",$window,s),event("keyup",$window,l),a.__click=i;var _=child(a);html(_,()=>t.content),template_effect(()=>{set_attribute(a,"id",t.id),set_class(a,clsx(n()),"svelte-cxe3nr")}),append(e,a),pop()}delegate(["click"]);const GitHub="data:image/svg+xml,%3csvg%20viewBox='0%200%2017%2016'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20fill='%23fff'%20fill-rule='evenodd'%3e%3cpath%20d='m8.20003216%200c-4.5281696%200-8.20003216%203.67233045-8.20003216%208.2025137%200%203.6241466%202.34955472%206.6987785%205.60770169%207.7833978.40979259.0759104.5602814-.1779394.5602814-.3946059%200-.195566-.00765306-.84177-.01112588-1.5271516-2.28132027.4961843-2.76269151-.9677944-2.76269151-.9677944-.37300645-.948109-.91045728-1.2001576-.91045728-1.2001576-.74395492-.5091149.05607959-.4986933.05607959-.4986933.82344388.0578979%201.25703171.8453083%201.25703171.8453083.73134987%201.2540026%201.9182821.8914335%202.38621225.6819077.07357231-.5302154.28612167-.8920125.52060124-1.0968421-1.82130043-.2074672-3.73598109-.9107972-3.73598109-4.05374848%200-.89548638.32033536-1.62725057.84492391-2.20166134-.08514837-.20663091-.36580356-1.04087425.07942464-2.17071817%200%200%20.68858276-.22046205%202.25559569.8408051.6540475-.18179917%201.35555686-.27289175%202.0524358-.27597964.69687893.00308789%201.39890278.09418047%202.05423654.27597964%201.5651479-1.06126715%202.252766-.8408051%202.252766-.8408051.4463215%201.12984392.1655376%201.96408726.0803893%202.17071817.5257461.57441077.8438949%201.30611063.8438949%202.20166134%200%203.15041368-1.9182821%203.84415838-3.74421295%204.04718668.29409628.2545575.55616545.7537654.55616545%201.5189817%200%201.0974854-.0095181%201.9808133-.0095181%202.2510031%200%20.2182748.1475948.4740546.5633041.3935122%203.2563462-1.0858415%205.6029426-4.1593798%205.6029426-7.7823041%200-4.53018325-3.6713481-8.2025137-8.19996784-8.2025137'/%3e%3cpath%20d='m3.07518929%2011.6824029c-.01787762.0408541-.08159856.0531168-.13950928.0251063-.05905999-.0268489-.09226129-.0826118-.07310669-.1236596.01755837-.0420803.08127932-.0538267.14021161-.025558.05918769.0267843.09289978.0830636.07240436.1241113m.40045868.3611685c-.03881997.0364008-.11473601.0194912-.16626186-.0380143-.05324977-.0573765-.06321015-.1340506-.02381554-.1710323.0400331-.0363363.11365058-.0193621.16702804.0380789.05324977.0580219.06359325.1342442.02298552.1710322m.27480455.4620452c-.04992964.0350455-.1315282.0021944-.18190478-.0709945-.04986579-.0731243-.04986579-.1608994.00108543-.1960739.05056812-.0351746.13088971-.0035497.18196863.0690583.04980194.0744151.04980194.1621902-.00121313.1980747m.46462657.5351695c-.0446302.0496962-.13963698.0364009-.209232-.0314957-.07112739-.0663476-.09098432-.1605121-.04622642-.2102728.04514099-.0498253.14072241-.03582.21082822.0314957.07068044.0662185.09226128.161093.04469405.2102728m.60036877.1807134c-.01960153.0644113-.11116048.0937127-.20335792.0663476-.09206974-.0282042-.15234286-.1037166-.1337629-.1688379.01915459-.0648632.11109663-.0953908.20399641-.0660894.09194204.0280751.15234286.1030065.13318826.1685797m.68337202.0766095c.00229855.0678966-.07591604.1241759-.17271058.1254021-.09736918.0021299-.17609455-.0527941-.17711613-.1195289%200-.068542.07642682-.124305.17373215-.1259185.09679454-.0019362.17609456.0526005.17609456.1200453m.67130462-.0260098c.01162045.0662185-.05567602.1342442-.15176823.1523155-.09449599.0174259-.18196862-.0234282-.19403602-.0890659-.01174815-.0678965.05682529-.1358576.15112974-.1534772.09628375-.0169096.18241557.0229119.19467451.0902276'%20fill-rule='nonzero'/%3e%3c/g%3e%3c/svg%3e";var root$1=template('<footer><span class="made-by"> </span> <a class="github-link" href="https://github.com/ChiefWoods/formula-calculator" target="_blank"><img class="github-icon" alt="GitHub"></a></footer>');function Footer(e,t){push(t,!1),init();var n=root$1(),i=child(n),s=child(i);template_effect(()=>set_text(s,`Copyright @ ${new Date().getFullYear()??""} ChiefWoods`));var l=sibling(i,2),a=child(l);set_attribute(a,"src",GitHub),append(e,n),pop()}var root=template('<main class="svelte-lqp5ol"><section><div id="top" class="svelte-lqp5ol"><div id="head" class="svelte-lqp5ol"><p id="brand" class="svelte-lqp5ol">WOODS</p> <p id="model" class="svelte-lqp5ol">SE-104</p> <div id="solar" class="svelte-lqp5ol"><div class="svelte-lqp5ol"></div> <div class="svelte-lqp5ol"></div> <div class="svelte-lqp5ol"></div> <div class="svelte-lqp5ol"></div></div></div> <div id="screen" class="svelte-lqp5ol"><p id="input" class="svelte-lqp5ol"><!></p> <p id="display" class="svelte-lqp5ol"><!></p></div></div> <div id="keypad" class="svelte-lqp5ol"></div></section></main> <!>',1);function App($$anchor,$$props){push($$props,!1);let input=mutable_state(""),display=mutable_state("0"),shouldReset=!1,shouldClear=!1;const keypads=[{id:"negative",className:"negative",content:"&#177;",key:["n","N"],onclick:appendNegative},{id:"clear",className:"erase",content:"C",key:["Escape","c","C"],onclick:clearScreen},{id:"backspace",className:"erase",content:"&#8592;",key:["Backspace","Delete"],onclick:backspace},{id:"divide",className:"operator",content:"&#247;",key:["/"],onclick:appendOperator},{id:"seven",className:"digit",content:"7",key:["7"],onclick:appendNumber},{id:"eight",className:"digit",content:"8",key:["8"],onclick:appendNumber},{id:"nine",className:"digit",content:"9",key:["9"],onclick:appendNumber},{id:"multiply",className:"operator",content:"&#215;",key:["*"],onclick:appendOperator},{id:"four",className:"digit",content:"4",key:["4"],onclick:appendNumber},{id:"five",className:"digit",content:"5",key:["5"],onclick:appendNumber},{id:"six",className:"digit",content:"6",key:["6"],onclick:appendNumber},{id:"subtract",className:"operator",content:"&#8722;",key:["-"],onclick:appendOperator},{id:"one",className:"digit",content:"1",key:["1"],onclick:appendNumber},{id:"two",className:"digit",content:"2",key:["2"],onclick:appendNumber},{id:"three",className:"digit",content:"3",key:["3"],onclick:appendNumber},{id:"add",className:"operator",content:"&#43;",key:["+"],onclick:appendOperator},{id:"zero",className:"digit",content:"0",key:["0"],onclick:appendNumber},{id:"decimal",className:"digit",content:".",key:["."],onclick:appendDecimal},{id:"equals",className:"operator",content:"&#61;",key:["=","Enter"],onclick:evaluate}];function appendNumber(e){if(shouldClear&&clearScreen(),get(display).length>9)return alert("Maximum digit limit reached!");get(display)==="0"||shouldReset?(set(display,e),shouldReset=!1):set(display,get(display)+e),get(input)===""||get(input)==="0"?set(input,e):set(input,get(input)+e)}function appendOperator(e){e=setMode(e),shouldClear&&(set(input,get(display)),shouldClear=!1),trimZeroes(),get(input)===""?set(input,`0 ${e} `):/\s[+−×÷]\s$/g.test(get(input))&&e!=="−"?(set(input,get(input).replace(/[+−×÷]\s$/,`${e} `)),set(display,e),shouldReset=!0):/\s[+−×÷]\s-$/.test(get(input))&&e!=="−"?(set(input,get(input).replace(/[+−×÷]\s-$/,`${e} `)),set(display,e),shouldReset=!0):/\s[+−×÷]\s$/g.test(get(input))&&e==="−"?(set(input,get(input)+"-"),set(display,"-"),shouldReset=!1):/-?\d+(\.\d+)?$/.test(get(input))?(set(input,get(input)+` ${e} `),set(display,e),shouldReset=!0):/\.$/.test(get(input))&&(set(input,get(input).slice(0,-1)+` ${e} `),set(display,e),shouldReset=!0)}function appendDecimal(){shouldClear&&clearScreen(),get(display).includes(".")||(get(input)===""?(set(input,"0."),set(display,get(display)+".")):/[+−×÷]/.test(get(display))?(set(input,get(input)+"0."),set(display,"0."),shouldReset=!1):/^-$/.test(get(display))?(set(input,get(input)+"0."),set(display,get(display)+"0.")):(set(input,get(input)+"."),set(display,get(display)+".")))}function clearScreen(){set(input,""),set(display,"0"),shouldClear=!1}function backspace(){if((get(input).length===1||shouldClear)&&clearScreen(),/(-?\d+(\.\d*)?|-)$/.test(get(input))){set(input,get(input).slice(0,-1));const e=get(input).match(/[+−×÷]|(-?\d+(\.\d*)?|-)$/g);set(display,e?e[e.length-1]:"")}else if(/\s[+−×÷]\s$/.test(get(input))){set(input,get(input).slice(0,-3));const e=get(input).match(/-?\d+(\.\d*)?$/);set(display,e?e[0]:"")}}function setMode(e){return e==="*"?"×":e==="/"?"÷":e==="-"?"−":e}function evaluate(){shouldClear=!0,trimZeroes();const expression=get(input).replace(/[^0-9+−×÷.-]/g,"").replace(/−-/g,"+").replace(/×/g,"*").replace(/÷/g,"/");let result=eval(expression);result=Math.round(result*1e4)/1e4,result.toString().length>9&&(result=result.toExponential(4)),set(input,get(input)+` = ${result}`),set(display,result)}function trimZeroes(){set(input,get(input).toString().replace(new RegExp("(?<=\\.\\d*)0+$"),"").replace(/\.$/,""))}function appendNegative(){/\s[+−×÷]\s$/g.test(get(input))&&(set(input,get(input)+"-"),set(display,"-"),shouldReset=!1)}init();var fragment=root(),main=first_child(fragment),section=child(main),div=child(section),div_1=sibling(child(div),2),p=child(div_1),node=child(p);html(node,()=>get(input));var p_1=sibling(p,2),node_1=child(p_1);html(node_1,()=>get(display));var div_2=sibling(div,2);each(div_2,5,()=>keypads,index,(e,t)=>{let n=()=>get(t).id,i=()=>get(t).className,s=()=>get(t).content,l=()=>get(t).key,a=()=>get(t).onclick;KeypadBtn(e,{get id(){return n()},get className(){return i()},get content(){return s()},get key(){return l()},get onclick(){return a()}})});var node_2=sibling(main,2);Footer(node_2,{}),append($$anchor,fragment),pop()}mount(App,{target:document.body});
