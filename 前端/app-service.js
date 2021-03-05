	var __wxAppData = __wxAppData || {}; 	var __wxRoute = __wxRoute || ""; 	var __wxRouteBegin = __wxRouteBegin || ""; 	var __wxAppCode__ = __wxAppCode__ || {};	var global = global || {};	var __WXML_GLOBAL__=__WXML_GLOBAL__ || {};	var __wxAppCurrentFile__=__wxAppCurrentFile__||""; 	var Component = Component || function(){};	var definePlugin = definePlugin || function(){};	var requirePlugin = requirePlugin || function(){};	var Behavior = Behavior || function(){};	var __vd_version_info__ = __vd_version_info__ || {};
	/*v0.5vv_20190703_syb_scopedata*/global.__wcc_version__='v0.5vv_20190703_syb_scopedata';global.__wcc_version_info__={"customComponents":true,"fixZeroRpx":true,"propValueDeepCopy":false};
var $gwxc
var $gaic={}
$gwx=function(path,global){
if(typeof global === 'undefined') global={};if(typeof __WXML_GLOBAL__ === 'undefined') {__WXML_GLOBAL__={};
}__WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
function _(a,b){if(typeof(b)!='undefined')a.children.push(b);}
function _v(k){if(typeof(k)!='undefined')return {tag:'virtual','wxKey':k,children:[]};return {tag:'virtual',children:[]};}
function _n(tag){$gwxc++;if($gwxc>=16000){throw 'Dom limit exceeded, please check if there\'s any mistake you\'ve made.'};return {tag:'wx-'+tag,attr:{},children:[],n:[],raw:{},generics:{}}}
function _p(a,b){b&&a.properities.push(b);}
function _s(scope,env,key){return typeof(scope[key])!='undefined'?scope[key]:env[key]}
function _wp(m){console.warn("WXMLRT_$gwx:"+m)}
function _wl(tname,prefix){_wp(prefix+':-1:-1:-1: Template `' + tname + '` is being called recursively, will be stop.')}
$gwn=console.warn;
$gwl=console.log;
function $gwh()
{
function x()
{
}
x.prototype = 
{
hn: function( obj, all )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && ( all || obj.__wxspec__ !== 'm' || this.hn(obj.__value__) === 'h' ) ? "h" : "n";
}
return "n";
},
nh: function( obj, special )
{
return { __value__: obj, __wxspec__: special ? special : true }
},
rv: function( obj )
{
return this.hn(obj,true)==='n'?obj:this.rv(obj.__value__);
},
hm: function( obj )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && (obj.__wxspec__ === 'm' || this.hm(obj.__value__) );
}
return false;
}
}
return new x;
}
wh=$gwh();
function $gstack(s){
var tmp=s.split('\n '+' '+' '+' ');
for(var i=0;i<tmp.length;++i){
if(0==i) continue;
if(")"===tmp[i][tmp[i].length-1])
tmp[i]=tmp[i].replace(/\s\(.*\)$/,"");
else
tmp[i]="at anonymous function";
}
return tmp.join('\n '+' '+' '+' ');
}
function $gwrt( should_pass_type_info )
{
function ArithmeticEv( ops, e, s, g, o )
{
var _f = false;
var rop = ops[0][1];
var _a,_b,_c,_d, _aa, _bb;
switch( rop )
{
case '?:':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : rev( ops[3], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '&&':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : wh.rv( _a );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '||':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? wh.rv(_a) : rev( ops[2], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '+':
case '*':
case '/':
case '%':
case '|':
case '^':
case '&':
case '===':
case '==':
case '!=':
case '!==':
case '>=':
case '<=':
case '>':
case '<':
case '<<':
case '>>':
_a = rev( ops[1], e, s, g, o, _f );
_b = rev( ops[2], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
switch( rop )
{
case '+':
_d = wh.rv( _a ) + wh.rv( _b );
break;
case '*':
_d = wh.rv( _a ) * wh.rv( _b );
break;
case '/':
_d = wh.rv( _a ) / wh.rv( _b );
break;
case '%':
_d = wh.rv( _a ) % wh.rv( _b );
break;
case '|':
_d = wh.rv( _a ) | wh.rv( _b );
break;
case '^':
_d = wh.rv( _a ) ^ wh.rv( _b );
break;
case '&':
_d = wh.rv( _a ) & wh.rv( _b );
break;
case '===':
_d = wh.rv( _a ) === wh.rv( _b );
break;
case '==':
_d = wh.rv( _a ) == wh.rv( _b );
break;
case '!=':
_d = wh.rv( _a ) != wh.rv( _b );
break;
case '!==':
_d = wh.rv( _a ) !== wh.rv( _b );
break;
case '>=':
_d = wh.rv( _a ) >= wh.rv( _b );
break;
case '<=':
_d = wh.rv( _a ) <= wh.rv( _b );
break;
case '>':
_d = wh.rv( _a ) > wh.rv( _b );
break;
case '<':
_d = wh.rv( _a ) < wh.rv( _b );
break;
case '<<':
_d = wh.rv( _a ) << wh.rv( _b );
break;
case '>>':
_d = wh.rv( _a ) >> wh.rv( _b );
break;
default:
break;
}
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '-':
_a = ops.length === 3 ? rev( ops[1], e, s, g, o, _f ) : 0;
_b = ops.length === 3 ? rev( ops[2], e, s, g, o, _f ) : rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
_d = _c ? wh.rv( _a ) - wh.rv( _b ) : _a - _b;
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '!':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = !wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
case '~':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = ~wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
default:
$gwn('unrecognized op' + rop );
}
}
function rev( ops, e, s, g, o, newap )
{
var op = ops[0];
var _f = false;
if ( typeof newap !== "undefined" ) o.ap = newap;
if( typeof(op)==='object' )
{
var vop=op[0];
var _a, _aa, _b, _bb, _c, _d, _s, _e, _ta, _tb, _td;
switch(vop)
{
case 2:
return ArithmeticEv(ops,e,s,g,o);
break;
case 4: 
return rev( ops[1], e, s, g, o, _f );
break;
case 5: 
switch( ops.length )
{
case 2: 
_a = rev( ops[1],e,s,g,o,_f );
return should_pass_type_info?[_a]:[wh.rv(_a)];
return [_a];
break;
case 1: 
return [];
break;
default:
_a = rev( ops[1],e,s,g,o,_f );
_b = rev( ops[2],e,s,g,o,_f );
_a.push( 
should_pass_type_info ?
_b :
wh.rv( _b )
);
return _a;
break;
}
break;
case 6:
_a = rev(ops[1],e,s,g,o);
var ap = o.ap;
_ta = wh.hn(_a)==='h';
_aa = _ta ? wh.rv(_a) : _a;
o.is_affected |= _ta;
if( should_pass_type_info )
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return _ta ? wh.nh(undefined, 'e') : undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return (_ta || _tb) ? wh.nh(undefined, 'e') : undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return (_ta || _tb) ? (_td ? _d : wh.nh(_d, 'e')) : _d;
}
else
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return _td ? wh.rv(_d) : _d;
}
case 7: 
switch(ops[1][0])
{
case 11:
o.is_affected |= wh.hn(g)==='h';
return g;
case 3:
_s = wh.rv( s );
_e = wh.rv( e );
_b = ops[1][1];
if (g && g.f && g.f.hasOwnProperty(_b) )
{
_a = g.f;
o.ap = true;
}
else
{
_a = _s && _s.hasOwnProperty(_b) ? 
s : (_e && _e.hasOwnProperty(_b) ? e : undefined );
}
if( should_pass_type_info )
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
_d = _ta && !_td ? wh.nh(_d,'e') : _d;
return _d;
}
}
else
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
return wh.rv(_d);
}
}
return undefined;
}
break;
case 8: 
_a = {};
_a[ops[1]] = rev(ops[2],e,s,g,o,_f);
return _a;
break;
case 9: 
_a = rev(ops[1],e,s,g,o,_f);
_b = rev(ops[2],e,s,g,o,_f);
function merge( _a, _b, _ow )
{
var ka, _bbk;
_ta = wh.hn(_a)==='h';
_tb = wh.hn(_b)==='h';
_aa = wh.rv(_a);
_bb = wh.rv(_b);
for(var k in _bb)
{
if ( _ow || !_aa.hasOwnProperty(k) )
{
_aa[k] = should_pass_type_info ? (_tb ? wh.nh(_bb[k],'e') : _bb[k]) : wh.rv(_bb[k]);
}
}
return _a;
}
var _c = _a
var _ow = true
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
_a = _b
_b = _c
_ow = false
}
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
var _r = {}
return merge( merge( _r, _a, _ow ), _b, _ow );
}
else
return merge( _a, _b, _ow );
break;
case 10:
_a = rev(ops[1],e,s,g,o,_f);
_a = should_pass_type_info ? _a : wh.rv( _a );
return _a ;
break;
case 12:
var _r;
_a = rev(ops[1],e,s,g,o);
if ( !o.ap )
{
return should_pass_type_info && wh.hn(_a)==='h' ? wh.nh( _r, 'f' ) : _r;
}
var ap = o.ap;
_b = rev(ops[2],e,s,g,o,_f);
o.ap = ap;
_ta = wh.hn(_a)==='h';
_tb = _ca(_b);
_aa = wh.rv(_a);	
_bb = wh.rv(_b); snap_bb=$gdc(_bb,"nv_");
try{
_r = typeof _aa === "function" ? $gdc(_aa.apply(null, snap_bb)) : undefined;
} catch (e){
e.message = e.message.replace(/nv_/g,"");
e.stack = e.stack.substring(0,e.stack.indexOf("\n", e.stack.lastIndexOf("at nv_")));
e.stack = e.stack.replace(/\snv_/g," "); 
e.stack = $gstack(e.stack);	
if(g.debugInfo)
{
e.stack += "\n "+" "+" "+" at "+g.debugInfo[0]+":"+g.debugInfo[1]+":"+g.debugInfo[2];
console.error(e);
}
_r = undefined;
}
return should_pass_type_info && (_tb || _ta) ? wh.nh( _r, 'f' ) : _r;
}
}
else
{
if( op === 3 || op === 1) return ops[1];
else if( op === 11 ) 
{
var _a='';
for( var i = 1 ; i < ops.length ; i++ )
{
var xp = wh.rv(rev(ops[i],e,s,g,o,_f));
_a += typeof(xp) === 'undefined' ? '' : xp;
}
return _a;
}
}
}
function wrapper( ops, e, s, g, o, newap )
{
if( ops[0] == '11182016' )
{
g.debugInfo = ops[2];
return rev( ops[1], e, s, g, o, newap );
}
else
{
g.debugInfo = null;
return rev( ops, e, s, g, o, newap );
}
}
return wrapper;
}
gra=$gwrt(true); 
grb=$gwrt(false); 
function TestTest( expr, ops, e,s,g, expect_a, expect_b, expect_affected )
{
{
var o = {is_affected:false};
var a = gra( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_a )
|| o.is_affected != expect_affected )
{
console.warn( "A. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_a ) + ", " + expect_affected + " is expected" );
}
}
{
var o = {is_affected:false};
var a = grb( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_b )
|| o.is_affected != expect_affected )
{
console.warn( "B. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_b ) + ", " + expect_affected + " is expected" );
}
}
}

function wfor( to_iter, func, env, _s, global, father, itemname, indexname, keyname )
{
var _n = wh.hn( to_iter ) === 'n'; 
var scope = wh.rv( _s ); 
var has_old_item = scope.hasOwnProperty(itemname);
var has_old_index = scope.hasOwnProperty(indexname);
var old_item = scope[itemname];
var old_index = scope[indexname];
var full = Object.prototype.toString.call(wh.rv(to_iter));
var type = full[8]; 
if( type === 'N' && full[10] === 'l' ) type = 'X'; 
var _y;
if( _n )
{
if( type === 'A' ) 
{
var r_iter_item;
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
r_iter_item = wh.rv(to_iter[i]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i = 0;
var r_iter_item;
for( var k in to_iter )
{
scope[itemname] = to_iter[k];
scope[indexname] = _n ? k : wh.nh(k, 'h');
r_iter_item = wh.rv(to_iter[k]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env,scope,_y,global );
i++;
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env,scope,_y,global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < to_iter ; i++ )
{
scope[itemname] = i;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
else
{
var r_to_iter = wh.rv(to_iter);
var r_iter_item, iter_item;
if( type === 'A' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = r_to_iter[i];
iter_item = wh.hn(iter_item)==='n' ? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item
scope[indexname] = _n ? i : wh.nh(i, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i=0;
for( var k in r_to_iter )
{
iter_item = r_to_iter[k];
iter_item = wh.hn(iter_item)==='n'? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item;
scope[indexname] = _n ? k : wh.nh(k, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y=_v(key);
_(father,_y);
func( env, scope, _y, global );
i++
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = wh.nh(r_to_iter[i],'h');
scope[itemname] = iter_item;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < r_to_iter ; i++ )
{
iter_item = wh.nh(i,'h');
scope[itemname] = iter_item;
scope[indexname]= _n ? i : wh.nh(i,'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
if(has_old_item)
{
scope[itemname]=old_item;
}
else
{
delete scope[itemname];
}
if(has_old_index)
{
scope[indexname]=old_index;
}
else
{
delete scope[indexname];
}
}

function _ca(o)
{ 
if ( wh.hn(o) == 'h' ) return true;
if ( typeof o !== "object" ) return false;
for(var i in o){ 
if ( o.hasOwnProperty(i) ){
if (_ca(o[i])) return true;
}
}
return false;
}
function _da( node, attrname, opindex, raw, o )
{
var isaffected = false;
var value = $gdc( raw, "", 2 );
if ( o.ap && value && value.constructor===Function ) 
{
attrname = "$wxs:" + attrname; 
node.attr["$gdc"] = $gdc;
}
if ( o.is_affected || _ca(raw) ) 
{
node.n.push( attrname );
node.raw[attrname] = raw;
}
node.attr[attrname] = value;
}
function _r( node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _rz( z, node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _o( opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _oz( z, opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _1( opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _1z( z, opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _2( opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1( opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}
function _2z( z, opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1z( z, opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}


function _m(tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_r(tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}
function _mz(z,tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_rz(z, tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}

var nf_init=function(){
if(typeof __WXML_GLOBAL__==="undefined"||undefined===__WXML_GLOBAL__.wxs_nf_init){
nf_init_Object();nf_init_Function();nf_init_Array();nf_init_String();nf_init_Boolean();nf_init_Number();nf_init_Math();nf_init_Date();nf_init_RegExp();
}
if(typeof __WXML_GLOBAL__!=="undefined") __WXML_GLOBAL__.wxs_nf_init=true;
};
var nf_init_Object=function(){
Object.defineProperty(Object.prototype,"nv_constructor",{writable:true,value:"Object"})
Object.defineProperty(Object.prototype,"nv_toString",{writable:true,value:function(){return "[object Object]"}})
}
var nf_init_Function=function(){
Object.defineProperty(Function.prototype,"nv_constructor",{writable:true,value:"Function"})
Object.defineProperty(Function.prototype,"nv_length",{get:function(){return this.length;},set:function(){}});
Object.defineProperty(Function.prototype,"nv_toString",{writable:true,value:function(){return "[function Function]"}})
}
var nf_init_Array=function(){
Object.defineProperty(Array.prototype,"nv_toString",{writable:true,value:function(){return this.nv_join();}})
Object.defineProperty(Array.prototype,"nv_join",{writable:true,value:function(s){
s=undefined==s?',':s;
var r="";
for(var i=0;i<this.length;++i){
if(0!=i) r+=s;
if(null==this[i]||undefined==this[i]) r+='';	
else if(typeof this[i]=='function') r+=this[i].nv_toString();
else if(typeof this[i]=='object'&&this[i].nv_constructor==="Array") r+=this[i].nv_join();
else r+=this[i].toString();
}
return r;
}})
Object.defineProperty(Array.prototype,"nv_constructor",{writable:true,value:"Array"})
Object.defineProperty(Array.prototype,"nv_concat",{writable:true,value:Array.prototype.concat})
Object.defineProperty(Array.prototype,"nv_pop",{writable:true,value:Array.prototype.pop})
Object.defineProperty(Array.prototype,"nv_push",{writable:true,value:Array.prototype.push})
Object.defineProperty(Array.prototype,"nv_reverse",{writable:true,value:Array.prototype.reverse})
Object.defineProperty(Array.prototype,"nv_shift",{writable:true,value:Array.prototype.shift})
Object.defineProperty(Array.prototype,"nv_slice",{writable:true,value:Array.prototype.slice})
Object.defineProperty(Array.prototype,"nv_sort",{writable:true,value:Array.prototype.sort})
Object.defineProperty(Array.prototype,"nv_splice",{writable:true,value:Array.prototype.splice})
Object.defineProperty(Array.prototype,"nv_unshift",{writable:true,value:Array.prototype.unshift})
Object.defineProperty(Array.prototype,"nv_indexOf",{writable:true,value:Array.prototype.indexOf})
Object.defineProperty(Array.prototype,"nv_lastIndexOf",{writable:true,value:Array.prototype.lastIndexOf})
Object.defineProperty(Array.prototype,"nv_every",{writable:true,value:Array.prototype.every})
Object.defineProperty(Array.prototype,"nv_some",{writable:true,value:Array.prototype.some})
Object.defineProperty(Array.prototype,"nv_forEach",{writable:true,value:Array.prototype.forEach})
Object.defineProperty(Array.prototype,"nv_map",{writable:true,value:Array.prototype.map})
Object.defineProperty(Array.prototype,"nv_filter",{writable:true,value:Array.prototype.filter})
Object.defineProperty(Array.prototype,"nv_reduce",{writable:true,value:Array.prototype.reduce})
Object.defineProperty(Array.prototype,"nv_reduceRight",{writable:true,value:Array.prototype.reduceRight})
Object.defineProperty(Array.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_String=function(){
Object.defineProperty(String.prototype,"nv_constructor",{writable:true,value:"String"})
Object.defineProperty(String.prototype,"nv_toString",{writable:true,value:String.prototype.toString})
Object.defineProperty(String.prototype,"nv_valueOf",{writable:true,value:String.prototype.valueOf})
Object.defineProperty(String.prototype,"nv_charAt",{writable:true,value:String.prototype.charAt})
Object.defineProperty(String.prototype,"nv_charCodeAt",{writable:true,value:String.prototype.charCodeAt})
Object.defineProperty(String.prototype,"nv_concat",{writable:true,value:String.prototype.concat})
Object.defineProperty(String.prototype,"nv_indexOf",{writable:true,value:String.prototype.indexOf})
Object.defineProperty(String.prototype,"nv_lastIndexOf",{writable:true,value:String.prototype.lastIndexOf})
Object.defineProperty(String.prototype,"nv_localeCompare",{writable:true,value:String.prototype.localeCompare})
Object.defineProperty(String.prototype,"nv_match",{writable:true,value:String.prototype.match})
Object.defineProperty(String.prototype,"nv_replace",{writable:true,value:String.prototype.replace})
Object.defineProperty(String.prototype,"nv_search",{writable:true,value:String.prototype.search})
Object.defineProperty(String.prototype,"nv_slice",{writable:true,value:String.prototype.slice})
Object.defineProperty(String.prototype,"nv_split",{writable:true,value:String.prototype.split})
Object.defineProperty(String.prototype,"nv_substring",{writable:true,value:String.prototype.substring})
Object.defineProperty(String.prototype,"nv_toLowerCase",{writable:true,value:String.prototype.toLowerCase})
Object.defineProperty(String.prototype,"nv_toLocaleLowerCase",{writable:true,value:String.prototype.toLocaleLowerCase})
Object.defineProperty(String.prototype,"nv_toUpperCase",{writable:true,value:String.prototype.toUpperCase})
Object.defineProperty(String.prototype,"nv_toLocaleUpperCase",{writable:true,value:String.prototype.toLocaleUpperCase})
Object.defineProperty(String.prototype,"nv_trim",{writable:true,value:String.prototype.trim})
Object.defineProperty(String.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_Boolean=function(){
Object.defineProperty(Boolean.prototype,"nv_constructor",{writable:true,value:"Boolean"})
Object.defineProperty(Boolean.prototype,"nv_toString",{writable:true,value:Boolean.prototype.toString})
Object.defineProperty(Boolean.prototype,"nv_valueOf",{writable:true,value:Boolean.prototype.valueOf})
}
var nf_init_Number=function(){
Object.defineProperty(Number,"nv_MAX_VALUE",{writable:false,value:Number.MAX_VALUE})
Object.defineProperty(Number,"nv_MIN_VALUE",{writable:false,value:Number.MIN_VALUE})
Object.defineProperty(Number,"nv_NEGATIVE_INFINITY",{writable:false,value:Number.NEGATIVE_INFINITY})
Object.defineProperty(Number,"nv_POSITIVE_INFINITY",{writable:false,value:Number.POSITIVE_INFINITY})
Object.defineProperty(Number.prototype,"nv_constructor",{writable:true,value:"Number"})
Object.defineProperty(Number.prototype,"nv_toString",{writable:true,value:Number.prototype.toString})
Object.defineProperty(Number.prototype,"nv_toLocaleString",{writable:true,value:Number.prototype.toLocaleString})
Object.defineProperty(Number.prototype,"nv_valueOf",{writable:true,value:Number.prototype.valueOf})
Object.defineProperty(Number.prototype,"nv_toFixed",{writable:true,value:Number.prototype.toFixed})
Object.defineProperty(Number.prototype,"nv_toExponential",{writable:true,value:Number.prototype.toExponential})
Object.defineProperty(Number.prototype,"nv_toPrecision",{writable:true,value:Number.prototype.toPrecision})
}
var nf_init_Math=function(){
Object.defineProperty(Math,"nv_E",{writable:false,value:Math.E})
Object.defineProperty(Math,"nv_LN10",{writable:false,value:Math.LN10})
Object.defineProperty(Math,"nv_LN2",{writable:false,value:Math.LN2})
Object.defineProperty(Math,"nv_LOG2E",{writable:false,value:Math.LOG2E})
Object.defineProperty(Math,"nv_LOG10E",{writable:false,value:Math.LOG10E})
Object.defineProperty(Math,"nv_PI",{writable:false,value:Math.PI})
Object.defineProperty(Math,"nv_SQRT1_2",{writable:false,value:Math.SQRT1_2})
Object.defineProperty(Math,"nv_SQRT2",{writable:false,value:Math.SQRT2})
Object.defineProperty(Math,"nv_abs",{writable:false,value:Math.abs})
Object.defineProperty(Math,"nv_acos",{writable:false,value:Math.acos})
Object.defineProperty(Math,"nv_asin",{writable:false,value:Math.asin})
Object.defineProperty(Math,"nv_atan",{writable:false,value:Math.atan})
Object.defineProperty(Math,"nv_atan2",{writable:false,value:Math.atan2})
Object.defineProperty(Math,"nv_ceil",{writable:false,value:Math.ceil})
Object.defineProperty(Math,"nv_cos",{writable:false,value:Math.cos})
Object.defineProperty(Math,"nv_exp",{writable:false,value:Math.exp})
Object.defineProperty(Math,"nv_floor",{writable:false,value:Math.floor})
Object.defineProperty(Math,"nv_log",{writable:false,value:Math.log})
Object.defineProperty(Math,"nv_max",{writable:false,value:Math.max})
Object.defineProperty(Math,"nv_min",{writable:false,value:Math.min})
Object.defineProperty(Math,"nv_pow",{writable:false,value:Math.pow})
Object.defineProperty(Math,"nv_random",{writable:false,value:Math.random})
Object.defineProperty(Math,"nv_round",{writable:false,value:Math.round})
Object.defineProperty(Math,"nv_sin",{writable:false,value:Math.sin})
Object.defineProperty(Math,"nv_sqrt",{writable:false,value:Math.sqrt})
Object.defineProperty(Math,"nv_tan",{writable:false,value:Math.tan})
}
var nf_init_Date=function(){
Object.defineProperty(Date.prototype,"nv_constructor",{writable:true,value:"Date"})
Object.defineProperty(Date,"nv_parse",{writable:true,value:Date.parse})
Object.defineProperty(Date,"nv_UTC",{writable:true,value:Date.UTC})
Object.defineProperty(Date,"nv_now",{writable:true,value:Date.now})
Object.defineProperty(Date.prototype,"nv_toString",{writable:true,value:Date.prototype.toString})
Object.defineProperty(Date.prototype,"nv_toDateString",{writable:true,value:Date.prototype.toDateString})
Object.defineProperty(Date.prototype,"nv_toTimeString",{writable:true,value:Date.prototype.toTimeString})
Object.defineProperty(Date.prototype,"nv_toLocaleString",{writable:true,value:Date.prototype.toLocaleString})
Object.defineProperty(Date.prototype,"nv_toLocaleDateString",{writable:true,value:Date.prototype.toLocaleDateString})
Object.defineProperty(Date.prototype,"nv_toLocaleTimeString",{writable:true,value:Date.prototype.toLocaleTimeString})
Object.defineProperty(Date.prototype,"nv_valueOf",{writable:true,value:Date.prototype.valueOf})
Object.defineProperty(Date.prototype,"nv_getTime",{writable:true,value:Date.prototype.getTime})
Object.defineProperty(Date.prototype,"nv_getFullYear",{writable:true,value:Date.prototype.getFullYear})
Object.defineProperty(Date.prototype,"nv_getUTCFullYear",{writable:true,value:Date.prototype.getUTCFullYear})
Object.defineProperty(Date.prototype,"nv_getMonth",{writable:true,value:Date.prototype.getMonth})
Object.defineProperty(Date.prototype,"nv_getUTCMonth",{writable:true,value:Date.prototype.getUTCMonth})
Object.defineProperty(Date.prototype,"nv_getDate",{writable:true,value:Date.prototype.getDate})
Object.defineProperty(Date.prototype,"nv_getUTCDate",{writable:true,value:Date.prototype.getUTCDate})
Object.defineProperty(Date.prototype,"nv_getDay",{writable:true,value:Date.prototype.getDay})
Object.defineProperty(Date.prototype,"nv_getUTCDay",{writable:true,value:Date.prototype.getUTCDay})
Object.defineProperty(Date.prototype,"nv_getHours",{writable:true,value:Date.prototype.getHours})
Object.defineProperty(Date.prototype,"nv_getUTCHours",{writable:true,value:Date.prototype.getUTCHours})
Object.defineProperty(Date.prototype,"nv_getMinutes",{writable:true,value:Date.prototype.getMinutes})
Object.defineProperty(Date.prototype,"nv_getUTCMinutes",{writable:true,value:Date.prototype.getUTCMinutes})
Object.defineProperty(Date.prototype,"nv_getSeconds",{writable:true,value:Date.prototype.getSeconds})
Object.defineProperty(Date.prototype,"nv_getUTCSeconds",{writable:true,value:Date.prototype.getUTCSeconds})
Object.defineProperty(Date.prototype,"nv_getMilliseconds",{writable:true,value:Date.prototype.getMilliseconds})
Object.defineProperty(Date.prototype,"nv_getUTCMilliseconds",{writable:true,value:Date.prototype.getUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_getTimezoneOffset",{writable:true,value:Date.prototype.getTimezoneOffset})
Object.defineProperty(Date.prototype,"nv_setTime",{writable:true,value:Date.prototype.setTime})
Object.defineProperty(Date.prototype,"nv_setMilliseconds",{writable:true,value:Date.prototype.setMilliseconds})
Object.defineProperty(Date.prototype,"nv_setUTCMilliseconds",{writable:true,value:Date.prototype.setUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_setSeconds",{writable:true,value:Date.prototype.setSeconds})
Object.defineProperty(Date.prototype,"nv_setUTCSeconds",{writable:true,value:Date.prototype.setUTCSeconds})
Object.defineProperty(Date.prototype,"nv_setMinutes",{writable:true,value:Date.prototype.setMinutes})
Object.defineProperty(Date.prototype,"nv_setUTCMinutes",{writable:true,value:Date.prototype.setUTCMinutes})
Object.defineProperty(Date.prototype,"nv_setHours",{writable:true,value:Date.prototype.setHours})
Object.defineProperty(Date.prototype,"nv_setUTCHours",{writable:true,value:Date.prototype.setUTCHours})
Object.defineProperty(Date.prototype,"nv_setDate",{writable:true,value:Date.prototype.setDate})
Object.defineProperty(Date.prototype,"nv_setUTCDate",{writable:true,value:Date.prototype.setUTCDate})
Object.defineProperty(Date.prototype,"nv_setMonth",{writable:true,value:Date.prototype.setMonth})
Object.defineProperty(Date.prototype,"nv_setUTCMonth",{writable:true,value:Date.prototype.setUTCMonth})
Object.defineProperty(Date.prototype,"nv_setFullYear",{writable:true,value:Date.prototype.setFullYear})
Object.defineProperty(Date.prototype,"nv_setUTCFullYear",{writable:true,value:Date.prototype.setUTCFullYear})
Object.defineProperty(Date.prototype,"nv_toUTCString",{writable:true,value:Date.prototype.toUTCString})
Object.defineProperty(Date.prototype,"nv_toISOString",{writable:true,value:Date.prototype.toISOString})
Object.defineProperty(Date.prototype,"nv_toJSON",{writable:true,value:Date.prototype.toJSON})
}
var nf_init_RegExp=function(){
Object.defineProperty(RegExp.prototype,"nv_constructor",{writable:true,value:"RegExp"})
Object.defineProperty(RegExp.prototype,"nv_exec",{writable:true,value:RegExp.prototype.exec})
Object.defineProperty(RegExp.prototype,"nv_test",{writable:true,value:RegExp.prototype.test})
Object.defineProperty(RegExp.prototype,"nv_toString",{writable:true,value:RegExp.prototype.toString})
Object.defineProperty(RegExp.prototype,"nv_source",{get:function(){return this.source;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_global",{get:function(){return this.global;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_ignoreCase",{get:function(){return this.ignoreCase;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_multiline",{get:function(){return this.multiline;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_lastIndex",{get:function(){return this.lastIndex;},set:function(v){this.lastIndex=v;}});
}
nf_init();
var nv_getDate=function(){var args=Array.prototype.slice.call(arguments);args.unshift(Date);return new(Function.prototype.bind.apply(Date, args));}
var nv_getRegExp=function(){var args=Array.prototype.slice.call(arguments);args.unshift(RegExp);return new(Function.prototype.bind.apply(RegExp, args));}
var nv_console={}
nv_console.nv_log=function(){var res="WXSRT:";for(var i=0;i<arguments.length;++i)res+=arguments[i]+" ";console.log(res);}
var nv_parseInt = parseInt, nv_parseFloat = parseFloat, nv_isNaN = isNaN, nv_isFinite = isFinite, nv_decodeURI = decodeURI, nv_decodeURIComponent = decodeURIComponent, nv_encodeURI = encodeURI, nv_encodeURIComponent = encodeURIComponent;
function $gdc(o,p,r) {
o=wh.rv(o);
if(o===null||o===undefined) return o;
if(o.constructor===String||o.constructor===Boolean||o.constructor===Number) return o;
if(o.constructor===Object){
var copy={};
for(var k in o)
if(o.hasOwnProperty(k))
if(undefined===p) copy[k.substring(3)]=$gdc(o[k],p,r);
else copy[p+k]=$gdc(o[k],p,r);
return copy;
}
if(o.constructor===Array){
var copy=[];
for(var i=0;i<o.length;i++) copy.push($gdc(o[i],p,r));
return copy;
}
if(o.constructor===Date){
var copy=new Date();
copy.setTime(o.getTime());
return copy;
}
if(o.constructor===RegExp){
var f="";
if(o.global) f+="g";
if(o.ignoreCase) f+="i";
if(o.multiline) f+="m";
return (new RegExp(o.source,f));
}
if(r&&o.constructor===Function){
if ( r == 1 ) return $gdc(o(),undefined, 2);
if ( r == 2 ) return o;
}
return null;
}
var nv_JSON={}
nv_JSON.nv_stringify=function(o){
JSON.stringify(o);
return JSON.stringify($gdc(o));
}
nv_JSON.nv_parse=function(o){
if(o===undefined) return undefined;
var t=JSON.parse(o);
return $gdc(t,'nv_');
}

function _af(p, a, r, c){
p.extraAttr = {"t_action": a, "t_rawid": r };
if ( typeof(c) != 'undefined' ) p.extraAttr.t_cid = c;
}

function _ai(i,p,e,me,r,c){var x=_grp(p,e,me);if(x)i.push(x);else{i.push('');_wp(me+':import:'+r+':'+c+': Path `'+p+'` not found from `'+me+'`.')}}
function _grp(p,e,me){if(p[0]!='/'){var mepart=me.split('/');mepart.pop();var ppart=p.split('/');for(var i=0;i<ppart.length;i++){if( ppart[i]=='..')mepart.pop();else if(!ppart[i]||ppart[i]=='.')continue;else mepart.push(ppart[i]);}p=mepart.join('/');}if(me[0]=='.'&&p[0]=='/')p='.'+p;if(e[p])return p;if(e[p+'.wxml'])return p+'.wxml';}
function _gd(p,c,e,d){if(!c)return;if(d[p][c])return d[p][c];for(var x=e[p].i.length-1;x>=0;x--){if(e[p].i[x]&&d[e[p].i[x]][c])return d[e[p].i[x]][c]};for(var x=e[p].ti.length-1;x>=0;x--){var q=_grp(e[p].ti[x],e,p);if(q&&d[q][c])return d[q][c]}var ii=_gapi(e,p);for(var x=0;x<ii.length;x++){if(ii[x]&&d[ii[x]][c])return d[ii[x]][c]}for(var k=e[p].j.length-1;k>=0;k--)if(e[p].j[k]){for(var q=e[e[p].j[k]].ti.length-1;q>=0;q--){var pp=_grp(e[e[p].j[k]].ti[q],e,p);if(pp&&d[pp][c]){return d[pp][c]}}}}
function _gapi(e,p){if(!p)return [];if($gaic[p]){return $gaic[p]};var ret=[],q=[],h=0,t=0,put={},visited={};q.push(p);visited[p]=true;t++;while(h<t){var a=q[h++];for(var i=0;i<e[a].ic.length;i++){var nd=e[a].ic[i];var np=_grp(nd,e,a);if(np&&!visited[np]){visited[np]=true;q.push(np);t++;}}for(var i=0;a!=p&&i<e[a].ti.length;i++){var ni=e[a].ti[i];var nm=_grp(ni,e,a);if(nm&&!put[nm]){put[nm]=true;ret.push(nm);}}}$gaic[p]=ret;return ret;}
var $ixc={};function _ic(p,ent,me,e,s,r,gg){var x=_grp(p,ent,me);ent[me].j.push(x);if(x){if($ixc[x]){_wp('-1:include:-1:-1: `'+p+'` is being included in a loop, will be stop.');return;}$ixc[x]=true;try{ent[x].f(e,s,r,gg)}catch(e){}$ixc[x]=false;}else{_wp(me+':include:-1:-1: Included path `'+p+'` not found from `'+me+'`.')}}
function _w(tn,f,line,c){_wp(f+':template:'+line+':'+c+': Template `'+tn+'` not found.');}function _ev(dom){var changed=false;delete dom.properities;delete dom.n;if(dom.children){do{changed=false;var newch = [];for(var i=0;i<dom.children.length;i++){var ch=dom.children[i];if( ch.tag=='virtual'){changed=true;for(var j=0;ch.children&&j<ch.children.length;j++){newch.push(ch.children[j]);}}else { newch.push(ch); } } dom.children = newch; }while(changed);for(var i=0;i<dom.children.length;i++){_ev(dom.children[i]);}} return dom; }
function _tsd( root )
{
if( root.tag == "wx-wx-scope" ) 
{
root.tag = "virtual";
root.wxCkey = "11";
root['wxScopeData'] = root.attr['wx:scope-data'];
delete root.n;
delete root.raw;
delete root.generics;
delete root.attr;
}
for( var i = 0 ; root.children && i < root.children.length ; i++ )
{
_tsd( root.children[i] );
}
return root;
}

var e_={}
if(typeof(global.entrys)==='undefined')global.entrys={};e_=global.entrys;
var d_={}
if(typeof(global.defines)==='undefined')global.defines={};d_=global.defines;
var f_={}
if(typeof(global.modules)==='undefined')global.modules={};f_=global.modules || {};
var p_={}
__WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
__WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
__WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
var z=__WXML_GLOBAL__.ops_set.$gwx || [];
function gz$gwx_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_1)return __WXML_GLOBAL__.ops_cached.$gwx_1
__WXML_GLOBAL__.ops_cached.$gwx_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([a,[3,'cu-bar fixed '],[[2,'?:'],[[2,'!='],[[7],[3,'bgImage']],[1,'']],[1,'none-bg text-white bg-img'],[1,'']],[3,' '],[[7],[3,'bgColor']]])
Z([a,[3,'height:'],[[7],[3,'CustomBar']],[3,'px;padding-top:'],[[7],[3,'StatusBar']],[3,'px;'],[[2,'?:'],[[7],[3,'bgImage']],[[2,'+'],[[2,'+'],[1,'background-image:url('],[[7],[3,'bgImage']]],[1,')']],[1,'']]])
Z([[7],[3,'isBack']])
Z([3,'BackPage'])
Z([3,'action'])
Z([3,'backText'])
Z([[7],[3,'isSearch']])
Z([3,'SearchPage'])
Z(z[4])
Z(z[5])
Z([[7],[3,'isCustom']])
Z([3,'content'])
Z([3,'right'])
})(__WXML_GLOBAL__.ops_cached.$gwx_1);return __WXML_GLOBAL__.ops_cached.$gwx_1
}
function gz$gwx_2(){
if( __WXML_GLOBAL__.ops_cached.$gwx_2)return __WXML_GLOBAL__.ops_cached.$gwx_2
__WXML_GLOBAL__.ops_cached.$gwx_2=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'bg-gradual-green'])
Z([1,true])
})(__WXML_GLOBAL__.ops_cached.$gwx_2);return __WXML_GLOBAL__.ops_cached.$gwx_2
}
function gz$gwx_3(){
if( __WXML_GLOBAL__.ops_cached.$gwx_3)return __WXML_GLOBAL__.ops_cached.$gwx_3
__WXML_GLOBAL__.ops_cached.$gwx_3=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'bg-gradual-green'])
Z([[6],[[7],[3,'ads']],[1,'bannerad']])
})(__WXML_GLOBAL__.ops_cached.$gwx_3);return __WXML_GLOBAL__.ops_cached.$gwx_3
}
function gz$gwx_4(){
if( __WXML_GLOBAL__.ops_cached.$gwx_4)return __WXML_GLOBAL__.ops_cached.$gwx_4
__WXML_GLOBAL__.ops_cached.$gwx_4=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[6],[[7],[3,'ads']],[1,'bannerad']])
})(__WXML_GLOBAL__.ops_cached.$gwx_4);return __WXML_GLOBAL__.ops_cached.$gwx_4
}
function gz$gwx_5(){
if( __WXML_GLOBAL__.ops_cached.$gwx_5)return __WXML_GLOBAL__.ops_cached.$gwx_5
__WXML_GLOBAL__.ops_cached.$gwx_5=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'bg-gradual-green'])
Z([3,'cardswiper'])
Z([3,'cs_content_box'])
Z([[7],[3,'current']])
Z([a,[3,'height:calc(100vh -  '],[[7],[3,'CustomBar']],[3,'px - 90rpx);']])
Z([3,'itemName'])
Z([[6],[[7],[3,'initData']],[3,'cate']])
Z([3,'*this'])
Z([3,'true'])
})(__WXML_GLOBAL__.ops_cached.$gwx_5);return __WXML_GLOBAL__.ops_cached.$gwx_5
}
function gz$gwx_6(){
if( __WXML_GLOBAL__.ops_cached.$gwx_6)return __WXML_GLOBAL__.ops_cached.$gwx_6
__WXML_GLOBAL__.ops_cached.$gwx_6=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'bg-gradual-black'])
Z([[2,'!'],[[7],[3,'is_share']]])
Z([[7],[3,'is_share']])
Z([[2,'&&'],[[2,'&&'],[[2,'=='],[[6],[[7],[3,'config']],[3,'check']],[1,0]],[[2,'=='],[[6],[[7],[3,'config']],[3,'jumpmode']],[1,0]]],[[2,'!'],[[7],[3,'isCard']]]])
Z([[6],[[6],[[7],[3,'config']],[3,'ads']],[1,'videoad']])
Z([3,'lineindex'])
Z([3,'lineitem'])
Z([[7],[3,'videoline']])
Z([3,'*this'])
Z([[2,'&&'],[[2,'=='],[[6],[[7],[3,'config']],[3,'check']],[1,0]],[[2,'=='],[[6],[[7],[3,'config']],[3,'jumpmode']],[1,0]]])
Z([[2,'&&'],[[2,'=='],[[6],[[7],[3,'config']],[3,'check']],[1,0]],[[2,'=='],[[6],[[7],[3,'config']],[3,'jumpmode']],[1,1]]])
Z([[6],[[6],[[7],[3,'config']],[3,'ads']],[1,'bannerad']])
})(__WXML_GLOBAL__.ops_cached.$gwx_6);return __WXML_GLOBAL__.ops_cached.$gwx_6
}
function gz$gwx_7(){
if( __WXML_GLOBAL__.ops_cached.$gwx_7)return __WXML_GLOBAL__.ops_cached.$gwx_7
__WXML_GLOBAL__.ops_cached.$gwx_7=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'bg-gradual-green'])
})(__WXML_GLOBAL__.ops_cached.$gwx_7);return __WXML_GLOBAL__.ops_cached.$gwx_7
}
function gz$gwx_8(){
if( __WXML_GLOBAL__.ops_cached.$gwx_8)return __WXML_GLOBAL__.ops_cached.$gwx_8
__WXML_GLOBAL__.ops_cached.$gwx_8=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'bg-gradual-green'])
Z([[7],[3,'searching']])
Z([[2,'=='],[[6],[[7],[3,'search_list']],[3,'length']],[1,0]])
Z([[6],[[7],[3,'ads']],[1,'bannerad']])
})(__WXML_GLOBAL__.ops_cached.$gwx_8);return __WXML_GLOBAL__.ops_cached.$gwx_8
}
function gz$gwx_9(){
if( __WXML_GLOBAL__.ops_cached.$gwx_9)return __WXML_GLOBAL__.ops_cached.$gwx_9
__WXML_GLOBAL__.ops_cached.$gwx_9=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'bg-gradual-green'])
})(__WXML_GLOBAL__.ops_cached.$gwx_9);return __WXML_GLOBAL__.ops_cached.$gwx_9
}
function gz$gwx_10(){
if( __WXML_GLOBAL__.ops_cached.$gwx_10)return __WXML_GLOBAL__.ops_cached.$gwx_10
__WXML_GLOBAL__.ops_cached.$gwx_10=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_10);return __WXML_GLOBAL__.ops_cached.$gwx_10
}
function gz$gwx_11(){
if( __WXML_GLOBAL__.ops_cached.$gwx_11)return __WXML_GLOBAL__.ops_cached.$gwx_11
__WXML_GLOBAL__.ops_cached.$gwx_11=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[10],[[7],[3,'tabBar']]])
Z([3,'footerWx'])
})(__WXML_GLOBAL__.ops_cached.$gwx_11);return __WXML_GLOBAL__.ops_cached.$gwx_11
}
function gz$gwx_12(){
if( __WXML_GLOBAL__.ops_cached.$gwx_12)return __WXML_GLOBAL__.ops_cached.$gwx_12
__WXML_GLOBAL__.ops_cached.$gwx_12=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'news_txt'])
Z([3,'newsContent'])
Z([[10],[[7],[3,'newsData']]])
Z([3,'newsDetail'])
})(__WXML_GLOBAL__.ops_cached.$gwx_12);return __WXML_GLOBAL__.ops_cached.$gwx_12
}
function gz$gwx_13(){
if( __WXML_GLOBAL__.ops_cached.$gwx_13)return __WXML_GLOBAL__.ops_cached.$gwx_13
__WXML_GLOBAL__.ops_cached.$gwx_13=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_13);return __WXML_GLOBAL__.ops_cached.$gwx_13
}
function gz$gwx_14(){
if( __WXML_GLOBAL__.ops_cached.$gwx_14)return __WXML_GLOBAL__.ops_cached.$gwx_14
__WXML_GLOBAL__.ops_cached.$gwx_14=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'footerWx'])
Z([[7],[3,'list']])
Z([3,'goHome'])
})(__WXML_GLOBAL__.ops_cached.$gwx_14);return __WXML_GLOBAL__.ops_cached.$gwx_14
}
function gz$gwx_15(){
if( __WXML_GLOBAL__.ops_cached.$gwx_15)return __WXML_GLOBAL__.ops_cached.$gwx_15
__WXML_GLOBAL__.ops_cached.$gwx_15=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'newsDetail'])
Z([3,'idy'])
Z([3,'cellData'])
Z([[7],[3,'content']])
Z([[2,'=='],[[6],[[7],[3,'cellData']],[3,'type']],[1,'view']])
Z([[2,'=='],[[6],[[7],[3,'cellData']],[3,'type']],[1,'img']])
})(__WXML_GLOBAL__.ops_cached.$gwx_15);return __WXML_GLOBAL__.ops_cached.$gwx_15
}
function gz$gwx_16(){
if( __WXML_GLOBAL__.ops_cached.$gwx_16)return __WXML_GLOBAL__.ops_cached.$gwx_16
__WXML_GLOBAL__.ops_cached.$gwx_16=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[10],[[7],[3,'tabBar']]])
Z([3,'footerWx'])
})(__WXML_GLOBAL__.ops_cached.$gwx_16);return __WXML_GLOBAL__.ops_cached.$gwx_16
}
__WXML_GLOBAL__.ops_set.$gwx=z;
__WXML_GLOBAL__.ops_init.$gwx=true;
var nv_require=function(){var nnm={};var nom={};return function(n){return function(){if(!nnm[n]) return undefined;try{if(!nom[n])nom[n]=nnm[n]();return nom[n];}catch(e){e.message=e.message.replace(/nv_/g,'');var tmp = e.stack.substring(0,e.stack.lastIndexOf(n));e.stack = tmp.substring(0,tmp.lastIndexOf('\n'));e.stack = e.stack.replace(/\snv_/g,' ');e.stack = $gstack(e.stack);e.stack += '\n    at ' + n.substring(2);console.error(e);}
}}}()
var x=['./sg_movie/colorui/components/cu-custom.wxml','./sg_movie/pages/about/about.wxml','./sg_movie/pages/category/category.wxml','./sg_movie/pages/home/home.wxml','./sg_movie/pages/index/index.wxml','./sg_movie/pages/play/play.wxml','./sg_movie/pages/record/record.wxml','./sg_movie/pages/search/search.wxml','./sg_movie/pages/tv/tv.wxml','./sg_movie/pages/web/web.wxml','./we7/pages/index/index.wxml','/we7/pages/templates/footer.wxml','./we7/pages/newsDetail/newsDetail.wxml','/we7/pages/templates/news.wxml','./we7/pages/selectarea/selectarea.wxml','./we7/pages/templates/footer.wxml','./we7/pages/templates/news.wxml','./we7/pages/user/index/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_1()
var oB=_mz(z,'view',['class',0,'style',1],[],e,s,gg)
var xC=_v()
_(oB,xC)
if(_oz(z,2,e,s,gg)){xC.wxVkey=1
var cF=_mz(z,'view',['bindtap',3,'class',1],[],e,s,gg)
var hG=_n('slot')
_rz(z,hG,'name',5,e,s,gg)
_(cF,hG)
_(xC,cF)
}
var oD=_v()
_(oB,oD)
if(_oz(z,6,e,s,gg)){oD.wxVkey=1
var oH=_mz(z,'view',['bindtap',7,'class',1],[],e,s,gg)
var cI=_n('slot')
_rz(z,cI,'name',9,e,s,gg)
_(oH,cI)
_(oD,oH)
}
var fE=_v()
_(oB,fE)
if(_oz(z,10,e,s,gg)){fE.wxVkey=1
}
var oJ=_n('slot')
_rz(z,oJ,'name',11,e,s,gg)
_(oB,oJ)
var lK=_n('slot')
_rz(z,lK,'name',12,e,s,gg)
_(oB,lK)
xC.wxXCkey=1
oD.wxXCkey=1
fE.wxXCkey=1
_(r,oB)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
d_[x[1]]={}
var m1=function(e,s,r,gg){
var z=gz$gwx_2()
var tM=_mz(z,'cu-custom',['bgColor',0,'isBack',1],[],e,s,gg)
_(r,tM)
return r
}
e_[x[1]]={f:m1,j:[],i:[],ti:[],ic:[]}
d_[x[2]]={}
var m2=function(e,s,r,gg){
var z=gz$gwx_3()
var oP=_mz(z,'cu-custom',['isSearch',-1,'bgColor',0],[],e,s,gg)
_(r,oP)
var bO=_v()
_(r,bO)
if(_oz(z,1,e,s,gg)){bO.wxVkey=1
}
bO.wxXCkey=1
return r
}
e_[x[2]]={f:m2,j:[],i:[],ti:[],ic:[]}
d_[x[3]]={}
var m3=function(e,s,r,gg){
var z=gz$gwx_4()
var oR=_v()
_(r,oR)
if(_oz(z,0,e,s,gg)){oR.wxVkey=1
}
oR.wxXCkey=1
return r
}
e_[x[3]]={f:m3,j:[],i:[],ti:[],ic:[]}
d_[x[4]]={}
var m4=function(e,s,r,gg){
var z=gz$gwx_5()
var cT=_mz(z,'cu-custom',['isSearch',-1,'bgColor',0],[],e,s,gg)
_(r,cT)
var hU=_mz(z,'swiper',['bindchange',1,'class',1,'current',2,'style',3],[],e,s,gg)
var oV=_v()
_(hU,oV)
var cW=function(lY,oX,aZ,gg){
var e2=_v()
_(aZ,e2)
if(_oz(z,8,lY,oX,gg)){e2.wxVkey=1
}
e2.wxXCkey=1
return aZ
}
oV.wxXCkey=2
_2z(z,6,cW,e,s,gg,oV,'itemName','index','*this')
_(r,hU)
return r
}
e_[x[4]]={f:m4,j:[],i:[],ti:[],ic:[]}
d_[x[5]]={}
var m5=function(e,s,r,gg){
var z=gz$gwx_6()
var c8=_mz(z,'cu-custom',['bgColor',0,'isBack',1,'isCustom',1],[],e,s,gg)
_(r,c8)
var o4=_v()
_(r,o4)
if(_oz(z,3,e,s,gg)){o4.wxVkey=1
}
var x5=_v()
_(r,x5)
if(_oz(z,4,e,s,gg)){x5.wxVkey=1
}
var h9=_v()
_(r,h9)
var o0=function(oBB,cAB,lCB,gg){
var tEB=_v()
_(lCB,tEB)
if(_oz(z,9,oBB,cAB,gg)){tEB.wxVkey=1
}
tEB.wxXCkey=1
return lCB
}
h9.wxXCkey=2
_2z(z,7,o0,e,s,gg,h9,'lineitem','lineindex','*this')
var o6=_v()
_(r,o6)
if(_oz(z,10,e,s,gg)){o6.wxVkey=1
}
var f7=_v()
_(r,f7)
if(_oz(z,11,e,s,gg)){f7.wxVkey=1
}
o4.wxXCkey=1
x5.wxXCkey=1
o6.wxXCkey=1
f7.wxXCkey=1
return r
}
e_[x[5]]={f:m5,j:[],i:[],ti:[],ic:[]}
d_[x[6]]={}
var m6=function(e,s,r,gg){
var z=gz$gwx_7()
var bGB=_mz(z,'cu-custom',['isBack',-1,'bgColor',0],[],e,s,gg)
_(r,bGB)
return r
}
e_[x[6]]={f:m6,j:[],i:[],ti:[],ic:[]}
d_[x[7]]={}
var m7=function(e,s,r,gg){
var z=gz$gwx_8()
var fKB=_n('cu-custom')
_rz(z,fKB,'bgColor',0,e,s,gg)
_(r,fKB)
var xIB=_v()
_(r,xIB)
if(_oz(z,1,e,s,gg)){xIB.wxVkey=1
var cLB=_v()
_(xIB,cLB)
if(_oz(z,2,e,s,gg)){cLB.wxVkey=1
}
cLB.wxXCkey=1
}
var oJB=_v()
_(r,oJB)
if(_oz(z,3,e,s,gg)){oJB.wxVkey=1
}
xIB.wxXCkey=1
oJB.wxXCkey=1
return r
}
e_[x[7]]={f:m7,j:[],i:[],ti:[],ic:[]}
d_[x[8]]={}
var m8=function(e,s,r,gg){
var z=gz$gwx_9()
var oNB=_n('cu-custom')
_rz(z,oNB,'bgColor',0,e,s,gg)
_(r,oNB)
return r
}
e_[x[8]]={f:m8,j:[],i:[],ti:[],ic:[]}
d_[x[9]]={}
var m9=function(e,s,r,gg){
var z=gz$gwx_10()
return r
}
e_[x[9]]={f:m9,j:[],i:[],ti:[],ic:[]}
d_[x[10]]={}
var m10=function(e,s,r,gg){
var z=gz$gwx_11()
var lQB=e_[x[10]].i
_ai(lQB,x[11],e_,x[10],31,2)
var aRB=_v()
_(r,aRB)
var tSB=_oz(z,1,e,s,gg)
var eTB=_gd(x[10],tSB,e_,d_)
if(eTB){
var bUB=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
aRB.wxXCkey=3
eTB(bUB,bUB,aRB,gg)
gg.f=cur_globalf
}
else _w(tSB,x[10],32,14)
lQB.pop()
return r
}
e_[x[10]]={f:m10,j:[],i:[],ti:[x[11]],ic:[]}
d_[x[12]]={}
var m11=function(e,s,r,gg){
var z=gz$gwx_12()
var xWB=_mz(z,'view',['class',0,'id',1],[],e,s,gg)
var oXB=e_[x[12]].i
_ai(oXB,x[13],e_,x[12],12,8)
var fYB=_v()
_(xWB,fYB)
var cZB=_oz(z,3,e,s,gg)
var h1B=_gd(x[12],cZB,e_,d_)
if(h1B){
var o2B=_1z(z,2,e,s,gg) || {}
var cur_globalf=gg.f
fYB.wxXCkey=3
h1B(o2B,o2B,fYB,gg)
gg.f=cur_globalf
}
else _w(cZB,x[12],13,20)
oXB.pop()
_(r,xWB)
return r
}
e_[x[12]]={f:m11,j:[],i:[],ti:[],ic:[]}
d_[x[14]]={}
var m12=function(e,s,r,gg){
var z=gz$gwx_13()
return r
}
e_[x[14]]={f:m12,j:[],i:[],ti:[],ic:[]}
d_[x[15]]={}
d_[x[15]]["footerWx"]=function(e,s,r,gg){
var z=gz$gwx_14()
var b=x[15]+':footerWx'
r.wxVkey=b
gg.f=$gdc(f_["./we7/pages/templates/footer.wxml"],"",1)
if(p_[b]){_wl(b,x[15]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
if(_oz(z,1,e,s,gg)){oB.wxVkey=1
}
oB.wxXCkey=1
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[15]]["goHome"]=function(e,s,r,gg){
var z=gz$gwx_14()
var b=x[15]+':goHome'
r.wxVkey=b
gg.f=$gdc(f_["./we7/pages/templates/footer.wxml"],"",1)
if(p_[b]){_wl(b,x[15]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m13=function(e,s,r,gg){
var z=gz$gwx_14()
return r
}
e_[x[15]]={f:m13,j:[],i:[],ti:[],ic:[]}
d_[x[16]]={}
d_[x[16]]["newsDetail"]=function(e,s,r,gg){
var z=gz$gwx_15()
var b=x[16]+':newsDetail'
r.wxVkey=b
gg.f=$gdc(f_["./we7/pages/templates/news.wxml"],"",1)
if(p_[b]){_wl(b,x[16]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
var xC=function(fE,oD,cF,gg){
var oH=_v()
_(cF,oH)
if(_oz(z,4,fE,oD,gg)){oH.wxVkey=1
}
var cI=_v()
_(cF,cI)
if(_oz(z,5,fE,oD,gg)){cI.wxVkey=1
}
oH.wxXCkey=1
cI.wxXCkey=1
return cF
}
oB.wxXCkey=2
_2z(z,3,xC,e,s,gg,oB,'cellData','idy','')
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m14=function(e,s,r,gg){
var z=gz$gwx_15()
return r
}
e_[x[16]]={f:m14,j:[],i:[],ti:[],ic:[]}
d_[x[17]]={}
var m15=function(e,s,r,gg){
var z=gz$gwx_16()
var t7B=e_[x[17]].i
_ai(t7B,x[11],e_,x[17],6,2)
var e8B=_v()
_(r,e8B)
var b9B=_oz(z,1,e,s,gg)
var o0B=_gd(x[17],b9B,e_,d_)
if(o0B){
var xAC=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
e8B.wxXCkey=3
o0B(xAC,xAC,e8B,gg)
gg.f=cur_globalf
}
else _w(b9B,x[17],7,14)
t7B.pop()
return r
}
e_[x[17]]={f:m15,j:[],i:[],ti:[x[11]],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
var main=e_[path].f
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
try{
main(env,{},root,global);
_tsd(root)
}catch(err){
console.log(err)
}
return root;
}
}
}
	__wxAppCode__['app.json'] = {"pages":["sg_movie/pages/index/index","we7/pages/user/index/index","sg_movie/pages/play/play","sg_movie/pages/category/category","sg_movie/pages/home/home","sg_movie/pages/search/search","sg_movie/pages/about/about","sg_movie/pages/record/record","sg_movie/pages/tv/tv","sg_movie/pages/web/web"],"window":{"navigationBarTextStyle":"white","navigationStyle":"custom"},"usingComponents":{"cu-custom":"/sg_movie/colorui/components/cu-custom"},"tabBar":{"color":"#999","selectedColor":"#85DA46","borderStyle":"white","backgroundColor":"#fff","list":[{"pagePath":"sg_movie/pages/index/index","iconPath":"sg_movie/resource/icon/home.png","selectedIconPath":"sg_movie/resource/icon/home_act.png","text":"首页"},{"pagePath":"sg_movie/pages/search/search","iconPath":"sg_movie/resource/icon/search.png","selectedIconPath":"sg_movie/resource/icon/search_act.png","text":"搜索"},{"pagePath":"sg_movie/pages/home/home","iconPath":"sg_movie/resource/icon/user.png","selectedIconPath":"sg_movie/resource/icon/user_act.png","text":"我的"}]},"sitemapLocation":"sitemap.json","navigateToMiniProgramAppIdList":["wxdbee79cb2794a634","wx051e6dbe909dd020","wx5094eac9e36313a1"],"plugins":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['app.wxml'] = [$gwx, './app.wxml'];else __wxAppCode__['app.wxml'] = $gwx( './app.wxml' );
		__wxAppCode__['project.config.json'] = {
	"description": "项目配置文件",
	"packOptions": {
		"ignore": []
	},
	"setting": {
		"urlCheck": false,
		"es6": true,
		"postcss": true,
		"minified": true,
		"newFeature": true,
		"coverView": true,
		"autoAudits": false,
		"checkInvalidKey": true,
		"checkSiteMap": true,
		"uploadWithSourceMap": true,
		"babelSetting": {
			"ignore": [],
			"disablePlugins": [],
			"outputPath": ""
		},
		"enhance": true
	},
	"compileType": "miniprogram",
	"libVersion": "2.10.0",
	"appid": "wx06a51b30ad3d6108",
	"projectname": "%E5%B0%8F%E5%B0%8F%E7%94%B5%E5%BD%B1",
	"debugOptions": {
		"hidedInDevtools": []
	},
	"isGameTourist": false,
	"simulatorType": "wechat",
	"simulatorPluginLibVersion": {},
	"condition": {
		"search": {
			"current": -1,
			"list": []
		},
		"conversation": {
			"current": -1,
			"list": []
		},
		"plugin": {
			"current": -1,
			"list": []
		},
		"game": {
			"currentL": -1,
			"list": []
		},
		"gamePlugin": {
			"current": -1,
			"list": []
		},
		"miniprogram": {
			"current": -1,
			"list": [
				{
					"id": -1,
					"name": "sg_movie/pages/about/about",
					"pathName": "sg_movie/pages/about/about",
					"query": "",
					"scene": null
				},
				{
					"id": 1,
					"name": "sg_movie/pages/play/play",
					"pathName": "sg_movie/pages/play/play",
					"query": "id\x3d51770\x26is_share\x3d1",
					"scene": 1007
				}
			]
		}
	}
};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['project.config.wxml'] = [$gwx, './project.config.wxml'];else __wxAppCode__['project.config.wxml'] = $gwx( './project.config.wxml' );
		__wxAppCode__['sg_movie/colorui/components/cu-custom.json'] = {"component":true,"usingComponents":{"cu-custom":"/sg_movie/colorui/components/cu-custom"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['sg_movie/colorui/components/cu-custom.wxml'] = [$gwx, './sg_movie/colorui/components/cu-custom.wxml'];else __wxAppCode__['sg_movie/colorui/components/cu-custom.wxml'] = $gwx( './sg_movie/colorui/components/cu-custom.wxml' );
		__wxAppCode__['sg_movie/pages/about/about.json'] = {"usingComponents":{"cu-custom":"/sg_movie/colorui/components/cu-custom"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['sg_movie/pages/about/about.wxml'] = [$gwx, './sg_movie/pages/about/about.wxml'];else __wxAppCode__['sg_movie/pages/about/about.wxml'] = $gwx( './sg_movie/pages/about/about.wxml' );
		__wxAppCode__['sg_movie/pages/category/category.json'] = {"enablePullDownRefresh":true,"usingComponents":{"cu-custom":"/sg_movie/colorui/components/cu-custom"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['sg_movie/pages/category/category.wxml'] = [$gwx, './sg_movie/pages/category/category.wxml'];else __wxAppCode__['sg_movie/pages/category/category.wxml'] = $gwx( './sg_movie/pages/category/category.wxml' );
		__wxAppCode__['sg_movie/pages/home/home.json'] = {"usingComponents":{"cu-custom":"/sg_movie/colorui/components/cu-custom"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['sg_movie/pages/home/home.wxml'] = [$gwx, './sg_movie/pages/home/home.wxml'];else __wxAppCode__['sg_movie/pages/home/home.wxml'] = $gwx( './sg_movie/pages/home/home.wxml' );
		__wxAppCode__['sg_movie/pages/index/index.json'] = {"enablePullDownRefresh":true,"usingComponents":{"cu-custom":"/sg_movie/colorui/components/cu-custom"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['sg_movie/pages/index/index.wxml'] = [$gwx, './sg_movie/pages/index/index.wxml'];else __wxAppCode__['sg_movie/pages/index/index.wxml'] = $gwx( './sg_movie/pages/index/index.wxml' );
		__wxAppCode__['sg_movie/pages/play/play.json'] = {"usingComponents":{"cu-custom":"/sg_movie/colorui/components/cu-custom"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['sg_movie/pages/play/play.wxml'] = [$gwx, './sg_movie/pages/play/play.wxml'];else __wxAppCode__['sg_movie/pages/play/play.wxml'] = $gwx( './sg_movie/pages/play/play.wxml' );
		__wxAppCode__['sg_movie/pages/record/record.json'] = {"usingComponents":{"cu-custom":"/sg_movie/colorui/components/cu-custom"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['sg_movie/pages/record/record.wxml'] = [$gwx, './sg_movie/pages/record/record.wxml'];else __wxAppCode__['sg_movie/pages/record/record.wxml'] = $gwx( './sg_movie/pages/record/record.wxml' );
		__wxAppCode__['sg_movie/pages/search/search.json'] = {"usingComponents":{"cu-custom":"/sg_movie/colorui/components/cu-custom"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['sg_movie/pages/search/search.wxml'] = [$gwx, './sg_movie/pages/search/search.wxml'];else __wxAppCode__['sg_movie/pages/search/search.wxml'] = $gwx( './sg_movie/pages/search/search.wxml' );
		__wxAppCode__['sg_movie/pages/tv/tv.json'] = {"usingComponents":{"cu-custom":"/sg_movie/colorui/components/cu-custom"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['sg_movie/pages/tv/tv.wxml'] = [$gwx, './sg_movie/pages/tv/tv.wxml'];else __wxAppCode__['sg_movie/pages/tv/tv.wxml'] = $gwx( './sg_movie/pages/tv/tv.wxml' );
		__wxAppCode__['sg_movie/pages/web/web.json'] = {"usingComponents":{"cu-custom":"/sg_movie/colorui/components/cu-custom"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['sg_movie/pages/web/web.wxml'] = [$gwx, './sg_movie/pages/web/web.wxml'];else __wxAppCode__['sg_movie/pages/web/web.wxml'] = $gwx( './sg_movie/pages/web/web.wxml' );
		__wxAppCode__['sitemap.json'] = {
  "desc": "关于本文件的更多信息，请参考文档 https://developers.weixin.qq.com/miniprogram/dev/framework/sitemap.html",
  "rules": [{
  "action": "allow",
  "page": "*"
  }]
};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['sitemap.wxml'] = [$gwx, './sitemap.wxml'];else __wxAppCode__['sitemap.wxml'] = $gwx( './sitemap.wxml' );
		__wxAppCode__['we7/pages/index/index.json'] = {};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['we7/pages/index/index.wxml'] = [$gwx, './we7/pages/index/index.wxml'];else __wxAppCode__['we7/pages/index/index.wxml'] = $gwx( './we7/pages/index/index.wxml' );
		__wxAppCode__['we7/pages/newsDetail/newsDetail.json'] = {};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['we7/pages/newsDetail/newsDetail.wxml'] = [$gwx, './we7/pages/newsDetail/newsDetail.wxml'];else __wxAppCode__['we7/pages/newsDetail/newsDetail.wxml'] = $gwx( './we7/pages/newsDetail/newsDetail.wxml' );
		__wxAppCode__['we7/pages/user/index/index.json'] = {"usingComponents":{"cu-custom":"/sg_movie/colorui/components/cu-custom"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['we7/pages/user/index/index.wxml'] = [$gwx, './we7/pages/user/index/index.wxml'];else __wxAppCode__['we7/pages/user/index/index.wxml'] = $gwx( './we7/pages/user/index/index.wxml' );
	
	define("sg_movie/resource/js/lanch.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function lanch(){}module.exports=lanch; 
 			}); 
		define("sg_movie/resource/js/onfire.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n};!function(n,o){"object"===("undefined"==typeof module?"undefined":_typeof(module))&&module.exports?module.exports=o():n.onfire=o()}("undefined"!=typeof window?window:void 0,function(){var f={},i=0,r="string",u="function",c=Function.call.bind(Object.hasOwnProperty),e=Function.call.bind(Array.prototype.slice);function t(n,o,e,t){if((void 0===n?"undefined":_typeof(n))!==r||(void 0===o?"undefined":_typeof(o))!==u)throw new Error("args: "+r+", "+u);return c(f,n)||(f[n]={}),f[n][++i]=[o,e,t],[n,i]}function d(n,o){for(var e in n)c(n,e)&&o(e,n[e])}function y(e,t){c(f,e)&&d(f[e],function(n,o){o[0].apply(o[2],t),o[1]&&delete f[e][n]})}return{on:function(n,o,e){return t(n,o,0,e)},one:function(n,o,e){return t(n,o,1,e)},un:function(t){var n,o,i=!1,e=void 0===t?"undefined":_typeof(t);return e===r?!!c(f,t)&&(delete f[t],!0):"object"===e?(n=t[0],o=t[1],!(!c(f,n)||!c(f[n],o)||(delete f[n][o],0))):e!==u||(d(f,function(e,n){d(n,function(n,o){o[0]===t&&(delete f[e][n],i=!0)})}),i)},fire:function(n){var o=e(arguments,1);setTimeout(function(){y(n,o)})},fireSync:function(n){y(n,e(arguments,1))},clear:function(){f={}}}}); 
 			}); 
		define("siteinfo.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			

        "use strict"; module.exports = {"name":"琪琪VIP影视","uniacid":"40","acid":"40","multiid":"0","version":"3.0","siteroot":"https://dkyxcx.a9h.cn/app/index.php","design_method":"3"};
     
 			}); 
		define("we7/pages/selectarea/selectarea.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var _util=require("../utils/util"),API="http://japi.zto.cn/zto/api_utf8/baseArea?msg_type=GET_AREA&data=",selectArea={addDot:function(e){e instanceof Array&&e.map(function(e){return 4<e.fullName.length?e.fullNameDot=e.fullName.slice(0,4)+"...":e.fullNameDot=e.fullName,e})},load:function(a){a.setData({isShow:!1}),(0,_util.Promise)(wx.request,{url:API+"0",method:"GET"}).then(function(e){var t=e.data.result[0];return selectArea.addDot(e.data.result),a.setData({proviceData:e.data.result,"selectedProvince.index":0,"selectedProvince.code":t.code,"selectedProvince.fullName":t.fullName}),(0,_util.Promise)(wx.request,{url:API+t.code,method:"GET"})}).then(function(e){var t=e.data.result[0];return selectArea.addDot(e.data.result),a.setData({cityData:e.data.result,"selectedCity.index":0,"selectedCity.code":t.code,"selectedCity.fullName":t.fullName}),(0,_util.Promise)(wx.request,{url:API+t.code,method:"GET"})}).then(function(e){var t=e.data.result[0];selectArea.addDot(e.data.result),a.setData({districtData:e.data.result,"selectedDistrict.index":0,"selectedDistrict.code":t.code,"selectedDistrict.fullName":t.fullName})}).catch(function(e){console.log(e)})},tapProvince:function(t,a){var l=t.currentTarget.dataset;(0,_util.Promise)(wx.request,{url:API+l.code,method:"GET"}).then(function(e){return selectArea.addDot(e.data.result),a.setData({cityData:e.data.result,"selectedProvince.code":l.code,"selectedProvince.fullName":l.fullName,"selectedCity.code":e.data.result[0].code,"selectedCity.fullName":e.data.result[0].fullName}),(0,_util.Promise)(wx.request,{url:API+e.data.result[0].code,method:"GET"})}).then(function(e){selectArea.addDot(e.data.result),a.setData({districtData:e.data.result,"selectedProvince.index":t.currentTarget.dataset.index,"selectedCity.index":0,"selectedDistrict.index":0,"selectedDistrict.code":e.data.result[0].code,"selectedDistrict.fullName":e.data.result[0].fullName})}).catch(function(e){console.log(e)})},tapCity:function(t,a){var l=t.currentTarget.dataset;(0,_util.Promise)(wx.request,{url:API+l.code,method:"GET"}).then(function(e){selectArea.addDot(e.data.result),a.setData({districtData:e.data.result,"selectedCity.index":t.currentTarget.dataset.index,"selectedCity.code":l.code,"selectedCity.fullName":l.fullName,"selectedDistrict.index":0,"selectedDistrict.code":e.data.result[0].code,"selectedDistrict.fullName":e.data.result[0].fullName})}).catch(function(e){console.log(e)})},tapDistrict:function(e,t){var a=e.currentTarget.dataset;t.setData({"selectedDistrict.index":e.currentTarget.dataset.index,"selectedDistrict.code":a.code,"selectedDistrict.fullName":a.fullName})},confirm:function(e,t){t.setData({address:t.data.selectedProvince.fullName+" "+t.data.selectedCity.fullName+" "+t.data.selectedDistrict.fullName,isShow:!1})},cancel:function(e){e.setData({isShow:!1})},choosearea:function(e){e.setData({isShow:!0})}};module.exports={SA:selectArea}; 
 			}); 
		define("we7/resource/js/base64.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function base64_encode(r){for(var e,a,t,o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",c=0,h=r.length,d="";c<h;){if(e=255&r.charCodeAt(c++),c==h){d+=o.charAt(e>>2),d+=o.charAt((3&e)<<4),d+="==";break}if(a=r.charCodeAt(c++),c==h){d+=o.charAt(e>>2),d+=o.charAt((3&e)<<4|(240&a)>>4),d+=o.charAt((15&a)<<2),d+="=";break}t=r.charCodeAt(c++),d+=o.charAt(e>>2),d+=o.charAt((3&e)<<4|(240&a)>>4),d+=o.charAt((15&a)<<2|(192&t)>>6),d+=o.charAt(63&t)}return d}function base64_decode(r){for(var e,a,t,o,c=new Array(-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,62,-1,-1,-1,63,52,53,54,55,56,57,58,59,60,61,-1,-1,-1,-1,-1,-1,-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-1,-1,-1,-1,-1,-1,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-1,-1,-1,-1,-1),h=0,d=r.length,f="";h<d;){for(;e=c[255&r.charCodeAt(h++)],h<d&&-1==e;);if(-1==e)break;for(;a=c[255&r.charCodeAt(h++)],h<d&&-1==a;);if(-1==a)break;f+=String.fromCharCode(e<<2|(48&a)>>4);do{if(61==(t=255&r.charCodeAt(h++)))return f;t=c[t]}while(h<d&&-1==t);if(-1==t)break;f+=String.fromCharCode((15&a)<<4|(60&t)>>2);do{if(61==(o=255&r.charCodeAt(h++)))return f;o=c[o]}while(h<d&&-1==o);if(-1==o)break;f+=String.fromCharCode((3&t)<<6|o)}return f}module.exports={base64_encode:base64_encode,base64_decode:base64_decode}; 
 			}); 
		define("we7/resource/js/htmlToWxml.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var startTag=/^<([-A-Za-z0-9_]+)((?:\s+[a-zA-Z_:][-a-zA-Z0-9_:.]*(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/,endTag=/^<\/([-A-Za-z0-9_]+)[^>]*>/,attr=/([a-zA-Z_:][-a-zA-Z0-9_:.]*)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))?/g,empty=makeMap("area,base,basefont,br,col,frame,hr,img,input,link,meta,param,embed,command,keygen,source,track,wbr"),block=makeMap("a,address,article,applet,aside,audio,blockquote,button,canvas,center,dd,del,dir,div,dl,dt,fieldset,figcaption,figure,footer,form,frameset,h1,h2,h3,h4,h5,h6,header,hgroup,hr,iframe,ins,isindex,li,map,menu,noframes,noscript,object,ol,output,p,pre,section,script,table,tbody,td,tfoot,th,thead,tr,ul,video"),inline=makeMap("abbr,acronym,applet,b,basefont,bdo,big,br,button,cite,code,del,dfn,em,font,i,iframe,img,input,ins,kbd,label,map,object,q,s,samp,script,select,small,span,strike,strong,sub,sup,textarea,tt,u,var"),closeSelf=makeMap("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr"),fillAttrs=makeMap("checked,compact,declare,defer,disabled,ismap,multiple,nohref,noresize,noshade,nowrap,readonly,selected"),special=makeMap("script,style"),HTMLParser=function(e,n){var t,a,r,s=[],i=e;for(s.last=function(){return this[this.length-1]};e;){if(a=!0,s.last()&&special[s.last()])e=e.replace(new RegExp("([\\s\\S]*?)</"+s.last()+"[^>]*>"),function(e,t){return t=t.replace(/<!--([\s\S]*?)-->|<!\[CDATA\[([\s\S]*?)]]>/g,"$1$2"),n.chars&&n.chars(t),""}),c("",s.last());else if(0==e.indexOf("\x3c!--")?0<=(t=e.indexOf("--\x3e"))&&(n.comment&&n.comment(e.substring(4,t)),e=e.substring(t+3),a=!1):0==e.indexOf("</")?(r=e.match(endTag))&&(e=e.substring(r[0].length),r[0].replace(endTag,c),a=!1):0==e.indexOf("<")&&(r=e.match(startTag))&&(e=e.substring(r[0].length),r[0].replace(startTag,o),a=!1),a){var l=(t=e.indexOf("<"))<0?e:e.substring(0,t);e=t<0?"":e.substring(t),n.chars&&n.chars(l)}if(e==i)throw"Parse Error: "+e;i=e}function o(e,t,a,r){if(t=t.toLowerCase(),block[t])for(;s.last()&&inline[s.last()];)c("",s.last());if(closeSelf[t]&&s.last()==t&&c("",t),(r=empty[t]||!!r)||s.push(t),n.start){var i=[];a.replace(attr,function(e,t){var a=arguments[2]?arguments[2]:arguments[3]?arguments[3]:arguments[4]?arguments[4]:fillAttrs[t]?t:"";i.push({name:t,value:a,escaped:a.replace(/(^|[^\\])"/g,'$1\\"')})}),n.start&&n.start(t,i,r)}}function c(e,t){if(t)for(a=s.length-1;0<=a&&s[a]!=t;a--);else var a=0;if(0<=a){for(var r=s.length-1;a<=r;r--)n.end&&n.end(s[r]);s.length=a}}c()};function makeMap(e){for(var t={},a=e.split(","),r=0;r<a.length;r++)t[a[r]]=!0;return t}var global={},debug=function(){};function q(e){return'"'+e+'"'}function removeDOCTYPE(e){return e.replace(/<\?xml.*\?>\n/,"").replace(/<!doctype.*\>\n/,"").replace(/<!DOCTYPE.*\>\n/,"")}global.html2json=function(e){e=removeDOCTYPE(e);var n=[],s={node:"root",child:[]};return HTMLParser(e,{start:function(e,t,a){debug(e,t,a);var r={node:"element",tag:e};if(0!==t.length&&(r.attr=t.reduce(function(e,t){var a=t.name,r=t.value;return r.match(/ /)&&(r=r.split(" ")),e[a]?Array.isArray(e[a])?e[a].push(r):e[a]=[e[a],r]:e[a]=r,e},{})),a){var i=n[0]||s;void 0===i.child&&(i.child=[]),i.child.push(r)}else n.unshift(r)},end:function(e){debug(e);var t=n.shift();if(t.tag!==e&&console.error("invalid state: mismatch end tag"),0===n.length)s.child.push(t);else{var a=n[0];void 0===a.child&&(a.child=[]),a.child.push(t)}},chars:function(e){debug(e);var t={node:"text",text:e};if(0===n.length)s.child.push(t);else{var a=n[0];void 0===a.child&&(a.child=[]),a.child.push(t)}},comment:function(e){debug(e);var t={node:"comment",text:e},a=n[0];void 0===a.child&&(a.child=[]),a.child.push(t)}}),s},global.json2html=function t(a){var e="";a.child&&(e=a.child.map(function(e){return t(e)}).join(""));var r="";if(a.attr&&""!==(r=Object.keys(a.attr).map(function(e){var t=a.attr[e];return Array.isArray(t)&&(t=t.join(" ")),e+"="+q(t)}).join(" "))&&(r=" "+r),"element"===a.node){var i=a.tag;return-1<["area","base","basefont","br","col","frame","hr","img","input","isindex","link","meta","param","embed"].indexOf(i)?"<"+a.tag+r+"/>":"<"+a.tag+r+">"+e+("</"+a.tag+">")}return"text"===a.node?a.text:"comment"===a.node?"\x3c!--"+a.text+"--\x3e":"root"===a.node?e:void 0};var html2wxwebview=function(e){var t=global.html2json(e);return t=parseHtmlNode(t),t=arrangeNode(t)},arrangeNode=function(e){for(var t=[],a=[],r=0,i=e.length;r<i;r++)if(0==r){if("view"==e[r].type)continue;t.push(e[r])}else if("view"==e[r].type){if(0<t.length){var n={type:"view",child:t};a.push(n)}t=[]}else if("img"==e[r].type){if(0<t.length){n={type:"view",child:t};a.push(n)}var s=e[r].attr;e[r].attr.width&&-1===e[r].attr.width.indexOf("%")&&-1===e[r].attr.width.indexOf("px")&&(e[r].attr.width=e[r].attr.width+"px"),e[r].attr.height&&-1===e[r].attr.height.indexOf("%")&&-1===e[r].attr.height.indexOf("px")&&(e[r].attr.height=e[r].attr.height+"px");n={type:"img",attr:s};a.push(n),t=[]}else if(t.push(e[r]),r==i-1){n={type:"view",child:t};a.push(n)}return a},parseHtmlNode=function(e){var n=[];return function e(t){var a={};if("root"==t.node);else if("element"==t.node)switch(t.tag){case"a":a={type:"a",text:t.child[0].text};break;case"img":a={type:"img",text:t.text};break;case"p":case"div":a={type:"view",text:t.text}}else"text"==t.node&&(a={type:"text",text:t.text});if(t.attr&&(a.attr=t.attr),0!=Object.keys(a).length&&n.push(a),"a"!=t.tag){var r=t.child;if(r)for(var i in r)e(r[i])}}(e),n};module.exports={html2json:html2wxwebview}; 
 			}); 
		define("we7/resource/js/md5.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";!function(n){function v(n,r){var t=(65535&n)+(65535&r);return(n>>16)+(r>>16)+(t>>16)<<16|65535&t}function f(n,r,t,e,o,u){return v((c=v(v(r,n),v(e,u)))<<(f=o)|c>>>32-f,t);var c,f}function g(n,r,t,e,o,u,c){return f(r&t|~r&e,n,r,o,u,c)}function l(n,r,t,e,o,u,c){return f(r&e|t&~e,n,r,o,u,c)}function d(n,r,t,e,o,u,c){return f(r^t^e,n,r,o,u,c)}function C(n,r,t,e,o,u,c){return f(t^(r|~e),n,r,o,u,c)}function i(n,r){var t,e,o,u,c;n[r>>5]|=128<<r%32,n[14+(r+64>>>9<<4)]=r;var f=1732584193,i=-271733879,a=-1732584194,h=271733878;for(t=0;t<n.length;t+=16)i=C(i=C(i=C(i=C(i=d(i=d(i=d(i=d(i=l(i=l(i=l(i=l(i=g(i=g(i=g(i=g(o=i,a=g(u=a,h=g(c=h,f=g(e=f,i,a,h,n[t],7,-680876936),i,a,n[t+1],12,-389564586),f,i,n[t+2],17,606105819),h,f,n[t+3],22,-1044525330),a=g(a,h=g(h,f=g(f,i,a,h,n[t+4],7,-176418897),i,a,n[t+5],12,1200080426),f,i,n[t+6],17,-1473231341),h,f,n[t+7],22,-45705983),a=g(a,h=g(h,f=g(f,i,a,h,n[t+8],7,1770035416),i,a,n[t+9],12,-1958414417),f,i,n[t+10],17,-42063),h,f,n[t+11],22,-1990404162),a=g(a,h=g(h,f=g(f,i,a,h,n[t+12],7,1804603682),i,a,n[t+13],12,-40341101),f,i,n[t+14],17,-1502002290),h,f,n[t+15],22,1236535329),a=l(a,h=l(h,f=l(f,i,a,h,n[t+1],5,-165796510),i,a,n[t+6],9,-1069501632),f,i,n[t+11],14,643717713),h,f,n[t],20,-373897302),a=l(a,h=l(h,f=l(f,i,a,h,n[t+5],5,-701558691),i,a,n[t+10],9,38016083),f,i,n[t+15],14,-660478335),h,f,n[t+4],20,-405537848),a=l(a,h=l(h,f=l(f,i,a,h,n[t+9],5,568446438),i,a,n[t+14],9,-1019803690),f,i,n[t+3],14,-187363961),h,f,n[t+8],20,1163531501),a=l(a,h=l(h,f=l(f,i,a,h,n[t+13],5,-1444681467),i,a,n[t+2],9,-51403784),f,i,n[t+7],14,1735328473),h,f,n[t+12],20,-1926607734),a=d(a,h=d(h,f=d(f,i,a,h,n[t+5],4,-378558),i,a,n[t+8],11,-2022574463),f,i,n[t+11],16,1839030562),h,f,n[t+14],23,-35309556),a=d(a,h=d(h,f=d(f,i,a,h,n[t+1],4,-1530992060),i,a,n[t+4],11,1272893353),f,i,n[t+7],16,-155497632),h,f,n[t+10],23,-1094730640),a=d(a,h=d(h,f=d(f,i,a,h,n[t+13],4,681279174),i,a,n[t],11,-358537222),f,i,n[t+3],16,-722521979),h,f,n[t+6],23,76029189),a=d(a,h=d(h,f=d(f,i,a,h,n[t+9],4,-640364487),i,a,n[t+12],11,-421815835),f,i,n[t+15],16,530742520),h,f,n[t+2],23,-995338651),a=C(a,h=C(h,f=C(f,i,a,h,n[t],6,-198630844),i,a,n[t+7],10,1126891415),f,i,n[t+14],15,-1416354905),h,f,n[t+5],21,-57434055),a=C(a,h=C(h,f=C(f,i,a,h,n[t+12],6,1700485571),i,a,n[t+3],10,-1894986606),f,i,n[t+10],15,-1051523),h,f,n[t+1],21,-2054922799),a=C(a,h=C(h,f=C(f,i,a,h,n[t+8],6,1873313359),i,a,n[t+15],10,-30611744),f,i,n[t+6],15,-1560198380),h,f,n[t+13],21,1309151649),a=C(a,h=C(h,f=C(f,i,a,h,n[t+4],6,-145523070),i,a,n[t+11],10,-1120210379),f,i,n[t+2],15,718787259),h,f,n[t+9],21,-343485551),f=v(f,e),i=v(i,o),a=v(a,u),h=v(h,c);return[f,i,a,h]}function a(n){var r,t="",e=32*n.length;for(r=0;r<e;r+=8)t+=String.fromCharCode(n[r>>5]>>>r%32&255);return t}function h(n){var r,t=[];for(t[(n.length>>2)-1]=void 0,r=0;r<t.length;r+=1)t[r]=0;var e=8*n.length;for(r=0;r<e;r+=8)t[r>>5]|=(255&n.charCodeAt(r/8))<<r%32;return t}function e(n){var r,t,e="0123456789abcdef",o="";for(t=0;t<n.length;t+=1)r=n.charCodeAt(t),o+=e.charAt(r>>>4&15)+e.charAt(15&r);return o}function t(n){return unescape(encodeURIComponent(n))}function o(n){return a(i(h(r=t(n)),8*r.length));var r}function u(n,r){return function(n,r){var t,e,o=h(n),u=[],c=[];for(u[15]=c[15]=void 0,16<o.length&&(o=i(o,8*n.length)),t=0;t<16;t+=1)u[t]=909522486^o[t],c[t]=1549556828^o[t];return e=i(u.concat(h(r)),512+8*r.length),a(i(c.concat(e),640))}(t(n),t(r))}module.exports=function(n,r,t){return r?t?u(r,n):e(u(r,n)):t?o(n):e(o(n))}}(); 
 			}); 
		define("we7/resource/js/underscore.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n};(function(){var e=Array.prototype,o=Object.prototype,n=Function.prototype,u=e.push,a=e.slice,p=o.toString,r=o.hasOwnProperty,t=Array.isArray,i=Object.keys,c=n.bind,f=Object.create,l=function(){},h=function n(t){return t instanceof n?t:this instanceof n?void(this._wrapped=t):new n(t)};(module.exports=h).VERSION="1.8.2";var s=function(u,i,n){if(void 0===i)return u;switch(null==n?3:n){case 1:return function(n){return u.call(i,n)};case 2:return function(n,t){return u.call(i,n,t)};case 3:return function(n,t,r){return u.call(i,n,t,r)};case 4:return function(n,t,r,e){return u.call(i,n,t,r,e)}}return function(){return u.apply(i,arguments)}},v=function(n,t,r){return null==n?h.identity:h.isFunction(n)?s(n,t,r):h.isObject(n)?h.matcher(n):h.property(n)};h.iteratee=function(n,t){return v(n,t,1/0)};var y=function(c,f){return function(n){var t=arguments.length;if(t<2||null==n)return n;for(var r=1;r<t;r++)for(var e=arguments[r],u=c(e),i=u.length,o=0;o<i;o++){var a=u[o];f&&void 0!==n[a]||(n[a]=e[a])}return n}},d=function(n){if(!h.isObject(n))return{};if(f)return f(n);l.prototype=n;var t=new l;return l.prototype=null,t},g=Math.pow(2,53)-1,m=function(n){var t=null!=n&&n.length;return"number"==typeof t&&0<=t&&t<=g};function b(a){return function(n,t,r,e){t=s(t,e,4);var u=!m(n)&&h.keys(n),i=(u||n).length,o=0<a?0:i-1;return arguments.length<3&&(r=n[u?u[o]:o],o+=a),function(n,t,r,e,u,i){for(;0<=u&&u<i;u+=a){var o=e?e[u]:u;r=t(r,n[o],o,n)}return r}(n,t,r,u,o,i)}}h.each=h.forEach=function(n,t,r){var e,u;if(t=s(t,r),m(n))for(e=0,u=n.length;e<u;e++)t(n[e],e,n);else{var i=h.keys(n);for(e=0,u=i.length;e<u;e++)t(n[i[e]],i[e],n)}return n},h.map=h.collect=function(n,t,r){t=v(t,r);for(var e=!m(n)&&h.keys(n),u=(e||n).length,i=Array(u),o=0;o<u;o++){var a=e?e[o]:o;i[o]=t(n[a],a,n)}return i},h.reduce=h.foldl=h.inject=b(1),h.reduceRight=h.foldr=b(-1),h.find=h.detect=function(n,t,r){var e;if(void 0!==(e=m(n)?h.findIndex(n,t,r):h.findKey(n,t,r))&&-1!==e)return n[e]},h.filter=h.select=function(n,e,t){var u=[];return e=v(e,t),h.each(n,function(n,t,r){e(n,t,r)&&u.push(n)}),u},h.reject=function(n,t,r){return h.filter(n,h.negate(v(t)),r)},h.every=h.all=function(n,t,r){t=v(t,r);for(var e=!m(n)&&h.keys(n),u=(e||n).length,i=0;i<u;i++){var o=e?e[i]:i;if(!t(n[o],o,n))return!1}return!0},h.some=h.any=function(n,t,r){t=v(t,r);for(var e=!m(n)&&h.keys(n),u=(e||n).length,i=0;i<u;i++){var o=e?e[i]:i;if(t(n[o],o,n))return!0}return!1},h.contains=h.includes=h.include=function(n,t,r){return m(n)||(n=h.values(n)),0<=h.indexOf(n,t,"number"==typeof r&&r)},h.invoke=function(n,r){var e=a.call(arguments,2),u=h.isFunction(r);return h.map(n,function(n){var t=u?r:n[r];return null==t?t:t.apply(n,e)})},h.pluck=function(n,t){return h.map(n,h.property(t))},h.where=function(n,t){return h.filter(n,h.matcher(t))},h.findWhere=function(n,t){return h.find(n,h.matcher(t))},h.max=function(n,e,t){var r,u,i=-1/0,o=-1/0;if(null==e&&null!=n)for(var a=0,c=(n=m(n)?n:h.values(n)).length;a<c;a++)r=n[a],i<r&&(i=r);else e=v(e,t),h.each(n,function(n,t,r){u=e(n,t,r),(o<u||u===-1/0&&i===-1/0)&&(i=n,o=u)});return i},h.min=function(n,e,t){var r,u,i=1/0,o=1/0;if(null==e&&null!=n)for(var a=0,c=(n=m(n)?n:h.values(n)).length;a<c;a++)(r=n[a])<i&&(i=r);else e=v(e,t),h.each(n,function(n,t,r){((u=e(n,t,r))<o||u===1/0&&i===1/0)&&(i=n,o=u)});return i},h.shuffle=function(n){for(var t,r=m(n)?n:h.values(n),e=r.length,u=Array(e),i=0;i<e;i++)(t=h.random(0,i))!==i&&(u[i]=u[t]),u[t]=r[i];return u},h.sample=function(n,t,r){return null==t||r?(m(n)||(n=h.values(n)),n[h.random(n.length-1)]):h.shuffle(n).slice(0,Math.max(0,t))},h.sortBy=function(n,e,t){return e=v(e,t),h.pluck(h.map(n,function(n,t,r){return{value:n,index:t,criteria:e(n,t,r)}}).sort(function(n,t){var r=n.criteria,e=t.criteria;if(r!==e){if(e<r||void 0===r)return 1;if(r<e||void 0===e)return-1}return n.index-t.index}),"value")};var _=function(o){return function(e,u,n){var i={};return u=v(u,n),h.each(e,function(n,t){var r=u(n,t,e);o(i,n,r)}),i}};h.groupBy=_(function(n,t,r){h.has(n,r)?n[r].push(t):n[r]=[t]}),h.indexBy=_(function(n,t,r){n[r]=t}),h.countBy=_(function(n,t,r){h.has(n,r)?n[r]++:n[r]=1}),h.toArray=function(n){return n?h.isArray(n)?a.call(n):m(n)?h.map(n,h.identity):h.values(n):[]},h.size=function(n){return null==n?0:m(n)?n.length:h.keys(n).length},h.partition=function(n,e,t){e=v(e,t);var u=[],i=[];return h.each(n,function(n,t,r){(e(n,t,r)?u:i).push(n)}),[u,i]},h.first=h.head=h.take=function(n,t,r){if(null!=n)return null==t||r?n[0]:h.initial(n,n.length-t)},h.initial=function(n,t,r){return a.call(n,0,Math.max(0,n.length-(null==t||r?1:t)))},h.last=function(n,t,r){if(null!=n)return null==t||r?n[n.length-1]:h.rest(n,Math.max(0,n.length-t))},h.rest=h.tail=h.drop=function(n,t,r){return a.call(n,null==t||r?1:t)},h.compact=function(n){return h.filter(n,h.identity)};var j=function n(t,r,e,u){for(var i=[],o=0,a=u||0,c=t&&t.length;a<c;a++){var f=t[a];if(m(f)&&(h.isArray(f)||h.isArguments(f))){r||(f=n(f,r,e));var l=0,s=f.length;for(i.length+=s;l<s;)i[o++]=f[l++]}else e||(i[o++]=f)}return i};function x(i){return function(n,t,r){t=v(t,r);for(var e=null!=n&&n.length,u=0<i?0:e-1;0<=u&&u<e;u+=i)if(t(n[u],u,n))return u;return-1}}h.flatten=function(n,t){return j(n,t,!1)},h.without=function(n){return h.difference(n,a.call(arguments,1))},h.uniq=h.unique=function(n,t,r,e){if(null==n)return[];h.isBoolean(t)||(e=r,r=t,t=!1),null!=r&&(r=v(r,e));for(var u=[],i=[],o=0,a=n.length;o<a;o++){var c=n[o],f=r?r(c,o,n):c;t?(o&&i===f||u.push(c),i=f):r?h.contains(i,f)||(i.push(f),u.push(c)):h.contains(u,c)||u.push(c)}return u},h.union=function(){return h.uniq(j(arguments,!0,!0))},h.intersection=function(n){if(null==n)return[];for(var t=[],r=arguments.length,e=0,u=n.length;e<u;e++){var i=n[e];if(!h.contains(t,i)){for(var o=1;o<r&&h.contains(arguments[o],i);o++);o===r&&t.push(i)}}return t},h.difference=function(n){var t=j(arguments,!0,!0,1);return h.filter(n,function(n){return!h.contains(t,n)})},h.zip=function(){return h.unzip(arguments)},h.unzip=function(n){for(var t=n&&h.max(n,"length").length||0,r=Array(t),e=0;e<t;e++)r[e]=h.pluck(n,e);return r},h.object=function(n,t){for(var r={},e=0,u=n&&n.length;e<u;e++)t?r[n[e]]=t[e]:r[n[e][0]]=n[e][1];return r},h.indexOf=function(n,t,r){var e=0,u=n&&n.length;if("number"==typeof r)e=r<0?Math.max(0,u+r):r;else if(r&&u)return n[e=h.sortedIndex(n,t)]===t?e:-1;if(t!=t)return h.findIndex(a.call(n,e),h.isNaN);for(;e<u;e++)if(n[e]===t)return e;return-1},h.lastIndexOf=function(n,t,r){var e=n?n.length:0;if("number"==typeof r&&(e=r<0?e+r+1:Math.min(e,r+1)),t!=t)return h.findLastIndex(a.call(n,0,e),h.isNaN);for(;0<=--e;)if(n[e]===t)return e;return-1},h.findIndex=x(1),h.findLastIndex=x(-1),h.sortedIndex=function(n,t,r,e){for(var u=(r=v(r,e,1))(t),i=0,o=n.length;i<o;){var a=Math.floor((i+o)/2);r(n[a])<u?i=a+1:o=a}return i},h.range=function(n,t,r){arguments.length<=1&&(t=n||0,n=0),r=r||1;for(var e=Math.max(Math.ceil((t-n)/r),0),u=Array(e),i=0;i<e;i++,n+=r)u[i]=n;return u};var w=function(n,t,r,e,u){if(!(e instanceof t))return n.apply(r,u);var i=d(n.prototype),o=n.apply(i,u);return h.isObject(o)?o:i};h.bind=function(t,r){if(c&&t.bind===c)return c.apply(t,a.call(arguments,1));if(!h.isFunction(t))throw new TypeError("Bind must be called on a function");var e=a.call(arguments,2);return function n(){return w(t,n,r,this,e.concat(a.call(arguments)))}},h.partial=function(i){var o=a.call(arguments,1);return function n(){for(var t=0,r=o.length,e=Array(r),u=0;u<r;u++)e[u]=o[u]===h?arguments[t++]:o[u];for(;t<arguments.length;)e.push(arguments[t++]);return w(i,n,this,this,e)}},h.bindAll=function(n){var t,r,e=arguments.length;if(e<=1)throw new Error("bindAll must be passed function names");for(t=1;t<e;t++)n[r=arguments[t]]=h.bind(n[r],n);return n},h.memoize=function(u,i){var n=function n(t){var r=n.cache,e=""+(i?i.apply(this,arguments):t);return h.has(r,e)||(r[e]=u.apply(this,arguments)),r[e]};return n.cache={},n},h.defer=h.partial(h.delay=function(n,t){var r=a.call(arguments,2);return setTimeout(function(){return n.apply(null,r)},t)},h,1),h.throttle=function(r,e,u){var i,o,a,c=null,f=0;u||(u={});var l=function(){f=!1===u.leading?0:h.now(),c=null,a=r.apply(i,o),c||(i=o=null)};return function(){var n=h.now();f||!1!==u.leading||(f=n);var t=e-(n-f);return i=this,o=arguments,t<=0||e<t?(c&&(clearTimeout(c),c=null),f=n,a=r.apply(i,o),c||(i=o=null)):c||!1===u.trailing||(c=setTimeout(l,t)),a}},h.debounce=function(r,e,u){var i,o,a,c,f,t=function n(){var t=h.now()-c;t<e&&0<=t?i=setTimeout(n,e-t):(i=null,u||(f=r.apply(a,o),i||(a=o=null)))};return function(){a=this,o=arguments,c=h.now();var n=u&&!i;return i||(i=setTimeout(t,e)),n&&(f=r.apply(a,o),a=o=null),f}},h.wrap=function(n,t){return h.partial(t,n)},h.negate=function(n){return function(){return!n.apply(this,arguments)}},h.compose=function(){var r=arguments,e=r.length-1;return function(){for(var n=e,t=r[e].apply(this,arguments);n--;)t=r[n].call(this,t);return t}},h.after=function(n,t){return function(){if(--n<1)return t.apply(this,arguments)}},h.once=h.partial(h.before=function(n,t){var r;return function(){return 0<--n&&(r=t.apply(this,arguments)),n<=1&&(t=null),r}},2);var A=!{toString:null}.propertyIsEnumerable("toString"),O=["valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"];function k(n,t){var r=O.length,e=n.constructor,u=h.isFunction(e)&&e.prototype||o,i="constructor";for(h.has(n,i)&&!h.contains(t,i)&&t.push(i);r--;)(i=O[r])in n&&n[i]!==u[i]&&!h.contains(t,i)&&t.push(i)}h.keys=function(n){if(!h.isObject(n))return[];if(i)return i(n);var t=[];for(var r in n)h.has(n,r)&&t.push(r);return A&&k(n,t),t},h.allKeys=function(n){if(!h.isObject(n))return[];var t=[];for(var r in n)t.push(r);return A&&k(n,t),t},h.values=function(n){for(var t=h.keys(n),r=t.length,e=Array(r),u=0;u<r;u++)e[u]=n[t[u]];return e},h.mapObject=function(n,t,r){t=v(t,r);for(var e,u=h.keys(n),i=u.length,o={},a=0;a<i;a++)o[e=u[a]]=t(n[e],e,n);return o},h.pairs=function(n){for(var t=h.keys(n),r=t.length,e=Array(r),u=0;u<r;u++)e[u]=[t[u],n[t[u]]];return e},h.invert=function(n){for(var t={},r=h.keys(n),e=0,u=r.length;e<u;e++)t[n[r[e]]]=r[e];return t},h.functions=h.methods=function(n){var t=[];for(var r in n)h.isFunction(n[r])&&t.push(r);return t.sort()},h.extend=y(h.allKeys),h.extendOwn=h.assign=y(h.keys),h.findKey=function(n,t,r){t=v(t,r);for(var e,u=h.keys(n),i=0,o=u.length;i<o;i++)if(t(n[e=u[i]],e,n))return e},h.pick=function(n,t,r){var e,u,i={},o=n;if(null==o)return i;h.isFunction(t)?(u=h.allKeys(o),e=s(t,r)):(u=j(arguments,!1,!1,1),e=function(n,t,r){return t in r},o=Object(o));for(var a=0,c=u.length;a<c;a++){var f=u[a],l=o[f];e(l,f,o)&&(i[f]=l)}return i},h.omit=function(n,t,r){if(h.isFunction(t))t=h.negate(t);else{var e=h.map(j(arguments,!1,!1,1),String);t=function(n,t){return!h.contains(e,t)}}return h.pick(n,t,r)},h.defaults=y(h.allKeys,!0),h.create=function(n,t){var r=d(n);return t&&h.extendOwn(r,t),r},h.clone=function(n){return h.isObject(n)?h.isArray(n)?n.slice():h.extend({},n):n},h.tap=function(n,t){return t(n),n},h.isMatch=function(n,t){var r=h.keys(t),e=r.length;if(null==n)return!e;for(var u=Object(n),i=0;i<e;i++){var o=r[i];if(t[o]!==u[o]||!(o in u))return!1}return!0};h.isEqual=function(n,t){return function n(t,r,e,u){if(t===r)return 0!==t||1/t==1/r;if(null==t||null==r)return t===r;t instanceof h&&(t=t._wrapped),r instanceof h&&(r=r._wrapped);var i=p.call(t);if(i!==p.call(r))return!1;switch(i){case"[object RegExp]":case"[object String]":return""+t==""+r;case"[object Number]":return+t!=+t?+r!=+r:0==+t?1/+t==1/r:+t==+r;case"[object Date]":case"[object Boolean]":return+t==+r}var o="[object Array]"===i;if(!o){if("object"!=(void 0===t?"undefined":_typeof(t))||"object"!=(void 0===r?"undefined":_typeof(r)))return!1;var a=t.constructor,c=r.constructor;if(a!==c&&!(h.isFunction(a)&&a instanceof a&&h.isFunction(c)&&c instanceof c)&&"constructor"in t&&"constructor"in r)return!1}u=u||[];for(var f=(e=e||[]).length;f--;)if(e[f]===t)return u[f]===r;if(e.push(t),u.push(r),o){if((f=t.length)!==r.length)return!1;for(;f--;)if(!n(t[f],r[f],e,u))return!1}else{var l,s=h.keys(t);if(f=s.length,h.keys(r).length!==f)return!1;for(;f--;)if(l=s[f],!h.has(r,l)||!n(t[l],r[l],e,u))return!1}return e.pop(),u.pop(),!0}(n,t)},h.isEmpty=function(n){return null==n||(m(n)&&(h.isArray(n)||h.isString(n)||h.isArguments(n))?0===n.length:0===h.keys(n).length)},h.isElement=function(n){return!(!n||1!==n.nodeType)},h.isArray=t||function(n){return"[object Array]"===p.call(n)},h.isObject=function(n){var t=void 0===n?"undefined":_typeof(n);return"function"===t||"object"===t&&!!n},h.each(["Arguments","Function","String","Number","Date","RegExp","Error"],function(t){h["is"+t]=function(n){return p.call(n)==="[object "+t+"]"}}),h.isArguments(arguments)||(h.isArguments=function(n){return h.has(n,"callee")}),"function"!=typeof/./&&"object"!=("undefined"==typeof Int8Array?"undefined":_typeof(Int8Array))&&(h.isFunction=function(n){return"function"==typeof n||!1}),h.isFinite=function(n){return isFinite(n)&&!isNaN(parseFloat(n))},h.isNaN=function(n){return h.isNumber(n)&&n!==+n},h.isBoolean=function(n){return!0===n||!1===n||"[object Boolean]"===p.call(n)},h.isNull=function(n){return null===n},h.isUndefined=function(n){return void 0===n},h.has=function(n,t){return null!=n&&r.call(n,t)},h.noConflict=function(){return root._=previousUnderscore,this},h.identity=function(n){return n},h.constant=function(n){return function(){return n}},h.noop=function(){},h.property=function(t){return function(n){return null==n?void 0:n[t]}},h.propertyOf=function(t){return null==t?function(){}:function(n){return t[n]}},h.matcher=h.matches=function(t){return t=h.extendOwn({},t),function(n){return h.isMatch(n,t)}},h.times=function(n,t,r){var e=Array(Math.max(0,n));t=s(t,r,1);for(var u=0;u<n;u++)e[u]=t(u);return e},h.random=function(n,t){return null==t&&(t=n,n=0),n+Math.floor(Math.random()*(t-n+1))},h.now=Date.now||function(){return(new Date).getTime()};var S={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},F=h.invert(S),E=function(t){var r=function(n){return t[n]},n="(?:"+h.keys(t).join("|")+")",e=RegExp(n),u=RegExp(n,"g");return function(n){return n=null==n?"":""+n,e.test(n)?n.replace(u,r):n}};h.escape=E(S),h.unescape=E(F),h.result=function(n,t,r){var e=null==n?void 0:n[t];return void 0===e&&(e=r),h.isFunction(e)?e.call(n):e};var I=0;h.uniqueId=function(n){var t=++I+"";return n?n+t:t},h.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var M=/(.)^/,N={"'":"'","\\":"\\","\r":"r","\n":"n","\u2028":"u2028","\u2029":"u2029"},B=/\\|'|\r|\n|\u2028|\u2029/g,T=function(n){return"\\"+N[n]};h.template=function(i,n,t){!n&&t&&(n=t),n=h.defaults({},n,h.templateSettings);var r=RegExp([(n.escape||M).source,(n.interpolate||M).source,(n.evaluate||M).source].join("|")+"|$","g"),o=0,a="__p+='";i.replace(r,function(n,t,r,e,u){return a+=i.slice(o,u).replace(B,T),o=u+n.length,t?a+="'+\n((__t=("+t+"))==null?'':_.escape(__t))+\n'":r?a+="'+\n((__t=("+r+"))==null?'':__t)+\n'":e&&(a+="';\n"+e+"\n__p+='"),n}),a+="';\n",n.variable||(a="with(obj||{}){\n"+a+"}\n"),a="var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n"+a+"return __p;\n";try{var e=new Function(n.variable||"obj","_",a)}catch(n){throw n.source=a,n}var u=function(n){return e.call(this,n,h)},c=n.variable||"obj";return u.source="function("+c+"){\n"+a+"}",u},h.chain=function(n){var t=h(n);return t._chain=!0,t};var R=function(n,t){return n._chain?h(t).chain():t};h.mixin=function(r){h.each(h.functions(r),function(n){var t=h[n]=r[n];h.prototype[n]=function(){var n=[this._wrapped];return u.apply(n,arguments),R(this,t.apply(h,n))}})},h.mixin(h),h.each(["pop","push","reverse","shift","sort","splice","unshift"],function(t){var r=e[t];h.prototype[t]=function(){var n=this._wrapped;return r.apply(n,arguments),"shift"!==t&&"splice"!==t||0!==n.length||delete n[0],R(this,n)}}),h.each(["concat","join","slice"],function(n){var t=e[n];h.prototype[n]=function(){return R(this,t.apply(this._wrapped,arguments))}}),h.prototype.valueOf=h.prototype.toJSON=h.prototype.value=function(){return this._wrapped},h.prototype.toString=function(){return""+this._wrapped}}).call(void 0); 
 			}); 
		define("we7/resource/js/util.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_base=require("base64"),_md=require("md5"),_md2=_interopRequireDefault(_md);function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _defineProperty(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var util={};function getQuery(e){var t=[];if(-1!=e.indexOf("?"))for(var n=e.split("?")[1].split("&"),a=0;a<n.length;a++)n[a].split("=")[0]&&unescape(n[a].split("=")[1])&&(t[a]={name:n[a].split("=")[0],value:unescape(n[a].split("=")[1])});return t}function getUrlParam(e,t){var n=new RegExp("(^|&)"+t+"=([^&]*)(&|$)"),a=e.split("?")[1].match(n);return null!=a?unescape(a[2]):null}function getSign(e,t,n){var a=require("underscore.js"),r=require("md5.js"),i="",o=getUrlParam(e,"sign");if(o||t&&t.sign)return!1;if(e&&(i=getQuery(e)),t){var s=[];for(var u in t)u&&t[u]&&(s=s.concat({name:u,value:t[u]}));i=i.concat(s)}i=a.sortBy(i,"name"),i=a.uniq(i,!0,"name");for(var c="",f=0;f<i.length;f++)i[f]&&i[f].name&&i[f].value&&(c+=i[f].name+"="+i[f].value,f<i.length-1&&(c+="&"));return o=r(c+(n=n||getApp().siteInfo.token))}util.base64_encode=function(e){return(0,_base.base64_encode)(e)},util.base64_decode=function(e){return(0,_base.base64_decode)(e)},util.md5=function(e){return(0,_md2.default)(e)},util.url=function(e,t){var n=getApp(),a=n.siteInfo.siteroot+"?i="+n.siteInfo.uniacid+"&t="+n.siteInfo.multiid+"&v="+n.siteInfo.version+"&from=wxapp&";if(e&&((e=e.split("/"))[0]&&(a+="c="+e[0]+"&"),e[1]&&(a+="a="+e[1]+"&"),e[2]&&(a+="do="+e[2]+"&")),t&&"object"===(void 0===t?"undefined":_typeof(t)))for(var r in t)r&&t.hasOwnProperty(params)&&t[r]&&(a+=r+"="+t[r]+"&");return a},util.getSign=function(e,t,n){return getSign(e,t,n)},util.request=function(a){require("underscore.js");var e,t=require("md5.js"),r=getApp();(a=a||{}).cachetime=a.cachetime?a.cachetime:0,a.showLoading=void 0===a.showLoading||a.showLoading;var n=wx.getStorageSync("userInfo").sessionid,i=a.url;if(-1==i.indexOf("http://")&&-1==i.indexOf("https://")&&(i=util.url(i)),getUrlParam(i,"state")||a.data&&a.data.state||!n||(i=i+"&state=we7sid-"+n),!a.data||!a.data.m){var o=getCurrentPages();o.length&&(o=o[getCurrentPages().length-1])&&o.__route__&&(i=i+"&m="+o.__route__.split("/")[0])}var s=getSign(i,a.data);if(s&&(i=i+"&sign="+s),!i)return!1;if(wx.showNavigationBarLoading(),a.showLoading&&util.showLoading(),a.cachetime){var u=t(i),c=wx.getStorageSync(u),f=Date.parse(new Date);if(c&&c.data){if(c.expire>f)return a.complete&&"function"==typeof a.complete&&a.complete(c),a.success&&"function"==typeof a.success&&a.success(c),console.log("cache:"+i),wx.hideLoading(),wx.hideNavigationBarLoading(),!0;wx.removeStorageSync(u)}}wx.request((_defineProperty(e={url:i,data:a.data?a.data:{},header:a.header?a.header:{},method:a.method?a.method:"GET"},"header",{"content-type":"application/x-www-form-urlencoded"}),_defineProperty(e,"success",function(e){if(wx.hideNavigationBarLoading(),wx.hideLoading(),e.data.errno){if("41009"==e.data.errno)return wx.setStorageSync("userInfo",""),void util.getUserInfo(function(){util.request(a)});if(a.fail&&"function"==typeof a.fail)a.fail(e);else if(e.data.message){if(null!=e.data.data&&e.data.data.redirect)var t=e.data.data.redirect;else t="";r.util.message(e.data.message,t,"error")}}else if(a.success&&"function"==typeof a.success&&a.success(e),a.cachetime){var n={data:e.data,expire:f+1e3*a.cachetime};wx.setStorageSync(u,n)}}),_defineProperty(e,"fail",function(e){wx.hideNavigationBarLoading(),wx.hideLoading();var t=require("md5.js")(i),n=wx.getStorageSync(t);if(n&&n.data)return a.success&&"function"==typeof a.success&&a.success(n),console.log("failreadcache:"+i),!0;a.fail&&"function"==typeof a.fail&&a.fail(e)}),_defineProperty(e,"complete",function(e){a.complete&&"function"==typeof a.complete&&a.complete(e)}),e))},util.getUserInfo=function(n){var e=function(){console.log("start login");var t={sessionid:"",wxInfo:"",memberInfo:""};wx.login({success:function(e){util.request({url:"auth/session/openid",data:{code:e.code},cachetime:0,success:function(e){e.data.errno||(t.sessionid=e.data.data.sessionid,wx.setStorageSync("userInfo",t),wx.getUserInfo({success:function(e){t.wxInfo=e.userInfo,wx.setStorageSync("userInfo",t),util.request({url:"auth/session/userinfo",data:{signature:e.signature,rawData:e.rawData,iv:e.iv,encryptedData:e.encryptedData},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},cachetime:0,success:function(e){e.data.errno||(t.memberInfo=e.data.data,wx.setStorageSync("userInfo",t)),"function"==typeof n&&n(t)}})},fail:function(){"function"==typeof n&&n(t)},complete:function(){}}))}})},fail:function(){wx.showModal({title:"获取信息失败",content:"请允许授权以便为您提供给服务",success:function(e){e.confirm&&util.getUserInfo()}})}})},t=wx.getStorageSync("userInfo");t.sessionid?wx.checkSession({success:function(){"function"==typeof n&&n(t)},fail:function(){t.sessionid="",console.log("relogin"),wx.removeStorageSync("userInfo"),e()}}):e()},util.navigateBack=function(t){var e=t.delta?t.delta:1;if(t.data){var n=getCurrentPages(),a=n[n.length-(e+1)];a.pageForResult?a.pageForResult(t.data):a.setData(t.data)}wx.navigateBack({delta:e,success:function(e){"function"==typeof t.success&&t.success(e)},fail:function(e){"function"==typeof t.fail&&t.fail(e)},complete:function(){"function"==typeof t.complete&&t.complete()}})},util.footer=function(e){var t=e,n=getApp().tabBar;for(var a in n.list)n.list[a].pageUrl=n.list[a].pagePath.replace(/(\?|#)[^"]*/g,"");t.setData({tabBar:n,"tabBar.thisurl":t.__route__})},util.message=function(e,t,n){if(!e)return!0;if("object"==(void 0===e?"undefined":_typeof(e))&&(t=e.redirect,n=e.type,e=e.title),t){var a=t.substring(0,9),r="",i="";"navigate:"==a?(i="navigateTo",r=t.substring(9)):"redirect:"==a?(i="redirectTo",r=t.substring(9)):(r=t,i="redirectTo")}console.log(r),n||(n="success"),"success"==n?wx.showToast({title:e,icon:"success",duration:2e3,mask:!!r,complete:function(){r&&setTimeout(function(){wx[i]({url:r})},1800)}}):"error"==n&&wx.showModal({title:"系统信息",content:e,showCancel:!1,complete:function(){r&&wx[i]({url:r})}})},util.user=util.getUserInfo,util.showLoading=function(){wx.getStorageSync("isShowLoading")&&(wx.hideLoading(),wx.setStorageSync("isShowLoading",!1)),wx.showLoading({title:"加载中",complete:function(){wx.setStorageSync("isShowLoading",!0)},fail:function(){wx.setStorageSync("isShowLoading",!1)}})},util.showImage=function(e){var t=e?e.currentTarget.dataset.preview:"";if(!t)return!1;wx.previewImage({urls:[t]})},util.parseContent=function(e){if(!e)return e;var t=e.match(new RegExp(["\ud83c[\udf00-\udfff]","\ud83d[\udc00-\ude4f]","\ud83d[\ude80-\udeff]"].join("|"),"g"));if(t)for(var n in t)e=e.replace(t[n],"[U+"+t[n].codePointAt(0).toString(16).toUpperCase()+"]");return e},util.date=function(){this.isLeapYear=function(e){return 0==e.getYear()%4&&(e.getYear()%100!=0||e.getYear()%400==0)},this.dateToStr=function(e,t){e=e||"yyyy-MM-dd HH:mm:ss",t=t||new Date;var n=e;return n=(n=(n=(n=(n=(n=(n=(n=(n=(n=(n=(n=(n=n.replace(/yyyy|YYYY/,t.getFullYear())).replace(/yy|YY/,9<t.getYear()%100?(t.getYear()%100).toString():"0"+t.getYear()%100)).replace(/MM/,9<t.getMonth()?t.getMonth()+1:"0"+(t.getMonth()+1))).replace(/M/g,t.getMonth())).replace(/w|W/g,["日","一","二","三","四","五","六"][t.getDay()])).replace(/dd|DD/,9<t.getDate()?t.getDate().toString():"0"+t.getDate())).replace(/d|D/g,t.getDate())).replace(/hh|HH/,9<t.getHours()?t.getHours().toString():"0"+t.getHours())).replace(/h|H/g,t.getHours())).replace(/mm/,9<t.getMinutes()?t.getMinutes().toString():"0"+t.getMinutes())).replace(/m/g,t.getMinutes())).replace(/ss|SS/,9<t.getSeconds()?t.getSeconds().toString():"0"+t.getSeconds())).replace(/s|S/g,t.getSeconds())},this.dateAdd=function(e,t,n){switch(n=n||new Date,e){case"s":return new Date(n.getTime()+1e3*t);case"n":return new Date(n.getTime()+6e4*t);case"h":return new Date(n.getTime()+36e5*t);case"d":return new Date(n.getTime()+864e5*t);case"w":return new Date(n.getTime()+6048e5*t);case"m":return new Date(n.getFullYear(),n.getMonth()+t,n.getDate(),n.getHours(),n.getMinutes(),n.getSeconds());case"y":return new Date(n.getFullYear()+t,n.getMonth(),n.getDate(),n.getHours(),n.getMinutes(),n.getSeconds())}},this.dateDiff=function(e,t,n){switch(e){case"s":return parseInt((n-t)/1e3);case"n":return parseInt((n-t)/6e4);case"h":return parseInt((n-t)/36e5);case"d":return parseInt((n-t)/864e5);case"w":return parseInt((n-t)/6048e5);case"m":return n.getMonth()+1+12*(n.getFullYear()-t.getFullYear())-(t.getMonth()+1);case"y":return n.getFullYear()-t.getFullYear()}},this.strToDate=function(dateStr){var data=dateStr,reCat=/(\d{1,4})/gm,t=data.match(reCat);return t[1]=t[1]-1,eval("var d = new Date("+t.join(",")+");"),d},this.strFormatToDate=function(e,t){var n=0,a=-1,r=t.length;-1<(a=e.indexOf("yyyy"))&&a<r&&(n=t.substr(a,4));var i=0;-1<(a=e.indexOf("MM"))&&a<r&&(i=parseInt(t.substr(a,2))-1);var o=0;-1<(a=e.indexOf("dd"))&&a<r&&(o=parseInt(t.substr(a,2)));var s=0;(-1<(a=e.indexOf("HH"))||1<(a=e.indexOf("hh")))&&a<r&&(s=parseInt(t.substr(a,2)));var u=0;-1<(a=e.indexOf("mm"))&&a<r&&(u=t.substr(a,2));var c=0;return-1<(a=e.indexOf("ss"))&&a<r&&(c=t.substr(a,2)),new Date(n,i,o,s,u,c)},this.dateToLong=function(e){return e.getTime()},this.longToDate=function(e){return new Date(e)},this.isDate=function(e,t){null==t&&(t="yyyyMMdd");var n=t.indexOf("yyyy");if(-1==n)return!1;var a=e.substring(n,n+4),r=t.indexOf("MM");if(-1==r)return!1;var i=e.substring(r,r+2),o=t.indexOf("dd");if(-1==o)return!1;var s=e.substring(o,o+2);return!(!isNumber(a)||"2100"<a||a<"1900")&&(!(!isNumber(i)||"12"<i||i<"01")&&!(s>getMaxDay(a,i)||s<"01"))},this.getMaxDay=function(e,t){return 4==t||6==t||9==t||11==t?"30":2==t?e%4==0&&e%100!=0||e%400==0?"29":"28":"31"},this.isNumber=function(e){return/^\d+$/g.test(e)},this.toArray=function(e){e=e||new Date;var t=Array();return t[0]=e.getFullYear(),t[1]=e.getMonth(),t[2]=e.getDate(),t[3]=e.getHours(),t[4]=e.getMinutes(),t[5]=e.getSeconds(),t},this.datePart=function(e,t){t=t||new Date;var n="";switch(e){case"y":n=t.getFullYear();break;case"M":n=t.getMonth()+1;break;case"d":n=t.getDate();break;case"w":n=["日","一","二","三","四","五","六"][t.getDay()];break;case"ww":n=t.WeekNumOfYear();break;case"h":n=t.getHours();break;case"m":n=t.getMinutes();break;case"s":n=t.getSeconds()}return n},this.maxDayOfDate=function(e){(e=e||new Date).setDate(1),e.setMonth(e.getMonth()+1);var t=e.getTime()-864e5;return new Date(t).getDate()}},module.exports=util; 
 			}); 
		define("app.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var util=require("we7/resource/js/util.js"),onfire=require("sg_movie/resource/js/onfire.js"),app=getApp();App({onLaunch:function(t){var o=this;wx.getSystemInfo({success:function(t){o.globalData.StatusBar=t.statusBarHeight;var e=wx.getMenuButtonBoundingClientRect();e?(o.globalData.Custom=e,o.globalData.CustomBar=e.bottom+e.top-t.statusBarHeight):o.globalData.CustomBar=t.statusBarHeight+50}}),getApp=function(){return o},this.util.request({url:"entry/wxapp/GetConfig",data:{m:"sg_movie"},success:function(t){console.log(t),wx.setStorageSync("config",t.data.data),onfire.fire("config",t.data.data)}})},onShow:function(t){},onHide:function(){},onError:function(t){console.log(t)},util:util,userInfo:{sessionid:null},siteInfo:require("siteinfo.js"),globalData:{height:0,ColorList:[{title:"嫣红",name:"red",color:"#e54d42"},{title:"桔橙",name:"orange",color:"#f37b1d"},{title:"明黄",name:"yellow",color:"#fbbd08"},{title:"橄榄",name:"olive",color:"#8dc63f"},{title:"森绿",name:"green",color:"#39b54a"},{title:"天青",name:"cyan",color:"#1cbbb4"},{title:"海蓝",name:"blue",color:"#0081ff"},{title:"姹紫",name:"purple",color:"#6739b6"},{title:"木槿",name:"mauve",color:"#9c26b0"},{title:"桃粉",name:"pink",color:"#e03997"},{title:"棕褐",name:"brown",color:"#a5673f"},{title:"玄灰",name:"grey",color:"#8799a3"},{title:"草灰",name:"gray",color:"#aaaaaa"},{title:"墨黑",name:"black",color:"#333333"},{title:"雅白",name:"white",color:"#ffffff"}]}}); 
 			}); 	require("app.js");
 		__wxRoute = 'sg_movie/colorui/components/cu-custom';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'sg_movie/colorui/components/cu-custom.js';	define("sg_movie/colorui/components/cu-custom.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var app=getApp();Component({options:{addGlobalClass:!0,multipleSlots:!0},properties:{bgColor:{type:String,default:""},isCustom:{type:[Boolean,String],default:!1},isBack:{type:[Boolean,String],default:!1},isSearch:{type:[Boolean,String],default:!1},bgImage:{type:String,default:""}},data:{StatusBar:app.globalData.StatusBar,CustomBar:app.globalData.CustomBar,Custom:app.globalData.Custom},methods:{BackPage:function(){wx.navigateBack({delta:1})},toHome:function(){wx.reLaunch({url:"/sg_movie/pages/index/index"})},SearchPage:function(){wx.switchTab({url:"/sg_movie/pages/search/search"})}}}); 
 			}); 	require("sg_movie/colorui/components/cu-custom.js");
 		__wxRoute = 'we7/pages/index/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'we7/pages/index/index.js';	define("we7/pages/index/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var app=getApp();Page({data:{navs:[],slide:[],commend:[],userInfo:{}},onLoad:function(){var a=this;app.util.footer(a),app.util.request({url:"wxapp/home/nav",cachetime:"30",success:function(e){e.data.message.errno||(console.log(e.data.message.message),a.setData({navs:e.data.message.message}))}}),app.util.request({url:"wxapp/home/slide",cachetime:"30",success:function(e){e.data.message.errno||a.setData({slide:e.data.message.message})}}),app.util.request({url:"wxapp/home/commend",cachetime:"30",success:function(e){e.data.message.errno||a.setData({commend:e.data.message.message})}})}}); 
 			}); 	require("we7/pages/index/index.js");
 		__wxRoute = 'we7/pages/newsDetail/newsDetail';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'we7/pages/newsDetail/newsDetail.js';	define("we7/pages/newsDetail/newsDetail.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var appInstance=getApp(),R_htmlToWxml=require("../../resource/js/htmlToWxml.js");Page({data:{scrollHeight:0,newsData:{}},getNewsDetail:function(){var t=this;wx.request({url:"https://wedengta.com/wxnews/getNews?action=DiscNewsContent&type=4&id=1478677877_1406730_1_9",headers:{"Content-Type":"application/json"},success:function(e){var o=e.data;if(0==o.ret){var n=JSON.parse(o.content);n.content=R_htmlToWxml.html2json(n.sContent),n.time=appInstance.util.formatTime(1e3*n.iTime),t.setData({newsData:n})}else console.log("数据拉取失败")},fail:function(e){console.log("数据拉取失败")}})},stockClick:function(e){var o=e.currentTarget.dataset.seccode,n=e.currentTarget.dataset.secname;console.log("stockClick:"+o+";secName:"+n)},onLoad:function(e){this.getNewsDetail(),console.log("onLoad")},onShow:function(){console.log("onShow")},onReady:function(){console.log("onReady")},onHide:function(){console.log("onHide")},onUnload:function(){console.log("onUnload")}}); 
 			}); 	require("we7/pages/newsDetail/newsDetail.js");
 		__wxRoute = 'sg_movie/pages/index/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'sg_movie/pages/index/index.js';	define("sg_movie/pages/index/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var interstitialAd=null,onfire=require("../../resource/js/onfire.js"),app=getApp();Page({data:{TabCur:0,current:0,scrollLeft:0,initData:!1,userInfo:{},hasUserInfo:!1,canIUse:wx.canIUse("button.open-type.getUserInfo"),height:app.globalData.height,ads:app.globalData.ads,config:app.globalData.config,vodlist:{}},onPullDownRefresh:function(){this.getInitData()},tabSelect:function(t){this.setData({current:t.currentTarget.dataset.index,TabCur:t.currentTarget.dataset.id,scrollLeft:60*(t.currentTarget.dataset.id-1)})},onLoad:function(){var a=this;console.log(app.globalData);var t=wx.getStorageSync("config");this.setData({config:t,CustomBar:app.globalData.CustomBar});this.getInitData(),onfire.on("config",function(t){a.setData({config:t})}),setTimeout(function(){a.chaPing()},3e3)},onShareAppMessage:function(t){return"button"===t.from&&console.log(t.target),{title:this.config.name+"--免费电影"}},onReady:function(){},gotoplay:function(t){console.log(t),wx.navigateTo({url:"../play/play?id="+t.currentTarget.dataset.vid})},gotoitem:function(t){wx.navigateTo({url:"../play/play?id="+t.currentTarget.dataset.vid})},banner_tap:function(t){console.log("banner点击事件")},getconfig:function(t){var a=this;app.util.request({url:"entry/wxapp/GetConfig",data:{},success:function(t){console.log(t),app.globalData.config=t.data.data,a.setData({config:t.data.data})}})},onReachBottom:function(t){},imgerr:function(t){},inputStr:function(t){console.log(t.detail.value);var a={keywords:t.detail.value};this.setData({keyword:t.detail.value}),""!=a.keywords?this.search(a):this.setData({searching:!1})},adError:function(t){console.log(t)},gosearch:function(){wx.navigateTo({url:"../search/search"})},chaPing:function(){wx.createInterstitialAd&&((interstitialAd=wx.createInterstitialAd({adUnitId:this.data.config.ads.insertad})).onLoad(function(){interstitialAd.show()}),interstitialAd.onError(function(t){console.log("onError event emit",t)}),interstitialAd.onClose(function(t){console.log("onClose event emit",t)}))},getbanner:function(){var e=this;app.util.request({url:"entry/wxapp/banner",data:{},success:function(t){if(console.log(t.data.data),t.data.data.forEach(function(t,a){t.imgurl=e.url_replace(t.imgurl)}),0<t.data.data.length)e.setData({swiperList:t.data.data});else{var a=e.data.list.slice(0,10);a.forEach(function(t,a){t.vid=t.vod_id,t.imgurl=e.url_replace(t.vod_pic)}),e.setData({swiperList:a})}}})},getv_list:function(t){var s=this;app.util.request({url:"entry/wxapp/GetVideoList",data:{page:1,t:this.data.initData.cate[t-1].type_id},success:function(t){for(var a in console.log(t),t.data.data){var e=t.data.data[a].vod_play_url.split("$$$")[0].split("#"),i=[];for(var n in e)i.push(e[n].split("$"));var o=i.length;2==t.data.data[a].type_id_1&&(t.data.data[a].vod_remarks="更新至"+o+"集"),t.data.data[a].vod_pic=s.url_replace(t.data.data[a].vod_pic)}var r=s.data.vodlist;r[s.data.TabCur+""]=t.data.data,s.setData({vodlist:r})}})},url_replace:function(e){var i="";return[["pic.china-gif.com","img.pic-imges.com"],["pic.china-gif.com","rpg.pic-imges.com"]].forEach(function(t,a){i=e.replace(t[0],t[1])}),i},getInitData:function(){var a=this;app.util.request({url:"entry/wxapp/index",data:{},cachetime:"30",success:function(t){console.log(t),wx.stopPullDownRefresh(),a.setData({initData:t.data.data})}})},cardswiper:function(t){var a=t.detail.current,e=0;e=0==a?0:this.data.initData.cate[a-1].type_id,this.setData({TabCur:e,current:a,scrollLeft:60*(e-1)}),0<a&&this.getv_list(a)}}); 
 			}); 	require("sg_movie/pages/index/index.js");
 		__wxRoute = 'we7/pages/user/index/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'we7/pages/user/index/index.js';	define("we7/pages/user/index/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var app=getApp();Page({data:{text:"微擎我的"},onLoad:function(n){app.util.footer(this)},onReady:function(){},onShow:function(){},onHide:function(){},onUnload:function(){}}); 
 			}); 	require("we7/pages/user/index/index.js");
 		__wxRoute = 'sg_movie/pages/play/play';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'sg_movie/pages/play/play.js';	define("sg_movie/pages/play/play.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function _defineProperty(a,t,e){return t in a?Object.defineProperty(a,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):a[t]=e,a}var app=getApp(),rewardedVideoAd=null,videoContext=null,onfire=require("../../resource/js/onfire.js");Page({data:{is_check:1,line:0,adcanPlay:!1,is_share:!1,excitingSwitch:!1,adrecord:[!1,!1],numstr:["一","二","三","四","五","六","七","八","九","十"],ok:!1},onLoad:function(a){var t=this;console.log(a),this.setData({id:a.id,is_share:!!a.is_share&&a.is_share});var e=wx.getStorageSync("config");console.log(e),this.setData({config:e}),onfire.on("config",function(a){t.setData({config:a})}),this.getvideo(a.id),this.excitingAd()},onReady:function(){},onShow:function(){},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(a){var t=this,e=t.data.id;return{title:t.data.video.vod_name,path:"/sg_movie/pages/play/play?id="+e+"&is_share=1",imageUrl:t.data.video.vod_pic}},getvideo:function(a){var r=this,c=this;app.util.request({url:"entry/wxapp/GetVideo",data:{id:a},success:function(a){console.log(a);var t=[],e=a.data.data.vod_play_url.split("$$$");for(var i in e){var o=[],d=e[i].split("#");for(var n in d){var s={name:d[n].split("$")[0],url:d[n].split("$")[1]};o.push(s)}t.push(o)}2==a.data.data.type_id_1&&(a.data.data.vod_remarks="更新至"+t[0].length+"集"),a.data.data.vod_pic=r.url_replace(a.data.data.vod_pic),c.setData({video:a.data.data,urllist:[],videoline:t,play_url:t[0][0].url,index:0}),videoContext=wx.createVideoContext("myVideo"),r.updateRecord(r.data.index,!1),r.record(r.data.video.vod_id)}})},excitingAd:function(){var t=this;console.log("创建广告"),wx.createRewardedVideoAd&&((rewardedVideoAd=wx.createRewardedVideoAd({adUnitId:this.data.config.ads.excitead})).onLoad(function(){console.log("广告加载成功"),t.setData({adcanPlay:!0})}),rewardedVideoAd.onError(function(a){console.log("onError event emit",a),t.setData({adcanPlay:!1})}),rewardedVideoAd.onClose(function(a){a&&a.isEnded?(t.data.isCard&&t.gojiexi(),1==t.data.config.jumpmode&&(t.setData({ok:!0}),t.goplay()),t.updateRecord(t.data.index,!0,!0),videoContext.play()):(t.updateRecord(t.data.index,!t.data.config.excit,!0),videoContext.pause())}))},onplay:function(){var t=this;this.data.config.ads.excitead&&this.data.adcanPlay&&(console.log(this.data.adrecord[0]),console.log(this.data.index),console.log(this.data.adrecord[1]),this.data.adrecord[0]==this.data.index&&this.data.adrecord[1]?console.log("本集已观看过广告"):(console.log("需要观看广告"),videoContext.pause(),this.data.adcanPlay&&wx.showModal({title:"观看完广告即可播放哦",content:"",success:function(a){console.log(a),a.confirm&&t.showAd()}})))},playerr:function(){app.util.message("播放错误，请切换资源")},canplay:function(){app.util.message("视频加载成功"),videoContext.play()},paly:function(){},set_url:function(a){console.log(a),this.setData({play_url:a.currentTarget.dataset.url,index:a.currentTarget.dataset.index,line:a.currentTarget.dataset.line}),this.updateRecord(this.data.index,!1)},imgerr:function(a){console.log(a);var t=this.data.data;t.pic="../../img/imgerr.jpg",this.setData({data:t})},playend:function(a){1==this.data.urllist.length?wx.showToast({title:"播放完毕"}):(wx.showToast({title:"自动播放下一集"}),this.setData({play_url:this.data.urllist[this.data.index+1][1],index:this.data.index+1}),this.updateRecord(this.data.index,!1))},showAd:function(){rewardedVideoAd.show()},updateRecord:function(a,t){2<arguments.length&&void 0!==arguments[2]&&arguments[2]?this.setData({adrecord:[a,t||!1]}):a!=this.data.adrecord[0]&&this.setData({adrecord:[a,t||!1]}),this.data.isCard&&(videoContext.pause(),this.adcheck())},record:function(a){app.util.request({url:"entry/wxapp/addrecord",data:{vid:a},success:function(a){console.log(a)}})},url_replace:function(e){var i="";return[["pic.china-gif.com","img.pic-imges.com"],["pic.china-gif.com","rpg.pic-imges.com"]].forEach(function(a,t){i=e.replace(a[0],a[1])}),i},goplay:function(){this.areyouok()?this.jump():this.data.adcanPlay&&this.showAd()},isCard:function(a){this.setData({isCard:a.detail.value}),0==this.data.index&&this.data.isCard&&(videoContext.pause(),this.adcheck())},adcheck:function(){var t=this;this.data.config.ads.excitead&&this.data.adcanPlay?(console.log(this.data.adrecord[0]),console.log(this.data.index),console.log(this.data.adrecord[1]),this.data.adrecord[0]==this.data.index&&this.data.adrecord[1]?(console.log("本集已观看过广告"),this.gojiexi()):this.data.adcanPlay?wx.showModal({title:"观看完广告即可播放哦",content:"",success:function(a){console.log(a),a.confirm&&t.showAd()}}):this.gojiexi()):this.gojiexi()},gojiexi:function(){videoContext.pause();var a={host:"https://www.coolcoolcloud.com/m3u8.php?url=",url:this.data.play_url};console.log("解析触发"),wx.navigateTo({url:"/sg_movie/pages/web/web?query="+encodeURIComponent(JSON.stringify(a))})},areyouok:function(){return!this.data.config.ads.excitead||(!this.data.adcanPlay||!!this.data.ok)},jump:function(){var a,t=this.data.video;t.config=this.data.config,wx.navigateToMiniProgram((_defineProperty(a={appId:this.data.config.jumpappid,path:"sg_nav/pages/play/play",envVersion:"develop",extraData:{data:t}},"envVersion","develop"),_defineProperty(a,"success",function(a){}),a))}}); 
 			}); 	require("sg_movie/pages/play/play.js");
 		__wxRoute = 'sg_movie/pages/category/category';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'sg_movie/pages/category/category.js';	define("sg_movie/pages/category/category.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var app=getApp();Page({data:{height:app.globalData.height,page:1,t:0,is_check:1},onLoad:function(t){var a=wx.getStorageSync("ads"),e=wx.getStorageSync("config");this.setData({ads:a,config:e,is_check:e.check}),this.get_category()},onReady:function(){},onShow:function(){},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){this.setData({page:1});var t=this.data.t;this.get_list(t)},onReachBottom:function(){this.get_list(this.data.t,this.data.page+1)},onShareAppMessage:function(){},gosearch:function(){wx.navigateTo({url:"../search/search"})},tapcategory:function(t){this.setData({t:t.currentTarget.dataset.t,page:1}),this.get_list(t.currentTarget.dataset.t)},get_category:function(){var a=this;app.util.request({url:"entry/wxapp/Category",data:{},cachetime:"30",success:function(t){console.log(t),a.setData({categorylist:t.data.data}),a.get_list(0)}})},imgerr:function(t){console.log(t);var a=this.data.list;a[t.currentTarget.dataset.index].vod_pic="/sg_movie/resource/img/imgerr.png",this.setData({list:a})},get_list:function(t){var i=this,o=1<arguments.length&&void 0!==arguments[1]?arguments[1]:this.data.page,c=this;app.util.request({url:"entry/wxapp/GetVideoList",data:{page:o,t:t},success:function(t){for(var a in console.log(t),t.data.data)t.data.data[a].vod_pic=i.url_replace(t.data.data[a].vod_pic);if(1<o){var e=i.data.list;e=e.concat(t.data.data),i.setData({list:e,page:o})}else console.log(t),wx.stopPullDownRefresh(),c.setData({list:t.data.data})}})},topaly:function(t){console.log(t),wx.navigateTo({url:"../play/play?id="+t.currentTarget.dataset.vid})},url_replace:function(e){var i="";return[["pic.china-gif.com","img.pic-imges.com"],["pic.china-gif.com","rpg.pic-imges.com"]].forEach(function(t,a){i=e.replace(t[0],t[1])}),i}}); 
 			}); 	require("sg_movie/pages/category/category.js");
 		__wxRoute = 'sg_movie/pages/home/home';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'sg_movie/pages/home/home.js';	define("sg_movie/pages/home/home.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var app=getApp();Page({data:{modalName:!1},onLoad:function(t){var o=wx.getStorageSync("ads"),n=wx.getStorageSync("config");this.setData({ads:o,config:n}),this.updateuserinfo(),this.getRecordList()},onReady:function(){},onShow:function(){this.getRecordList()},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){},taplogin:function(){this.showlogin()},authlogin:function(t){var o=this;console.log(t),app.util.getUserInfo(function(t){console.log(t),o.updateuserinfo()},t.detail)},updateuserinfo:function(){var t=wx.getStorageSync("userInfo");t?(this.setData({userinfo:t}),this.getRecordList()):this.showlogin()},showlogin:function(){this.setData({modalName:"DialogModal1"})},hideModal:function(){this.setData({modalName:!1})},about:function(){wx.navigateTo({url:"../about/about"})},gotoplay:function(t){console.log(t),wx.navigateTo({url:"../play/play?id="+t.currentTarget.dataset.vid})},getRecordList:function(){var o=this;app.util.request({url:"entry/wxapp/recordList",data:{},success:function(t){console.log(t),o.setData({recordlist:t.data.data})}})}}); 
 			}); 	require("sg_movie/pages/home/home.js");
 		__wxRoute = 'sg_movie/pages/search/search';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'sg_movie/pages/search/search.js';	define("sg_movie/pages/search/search.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var app=getApp();Page({data:{searching:!1,search_list:[],keyword:""},onLoad:function(a){wx.getStorageSync("config");var t=wx.getStorageSync("ads");this.setData({ads:t})},onReady:function(){},onShow:function(){},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){},inputStr:function(a){console.log(a.detail.value);var t={keywords:a.detail.value};this.setData({keyword:a.detail.value}),""!=t.keywords?this.search(t):this.setData({searching:!1})},searchblur:function(a){},clear:function(a){this.setData({keyword:"",searching:!1,search_list:[]})},search:function(){var c=this,r=this;app.util.request({url:"entry/wxapp/Search",data:{key:r.data.keyword},success:function(a){for(var t in console.log(a),a.data.data){var e=a.data.data[t].vod_play_url.split("#"),n=[];for(var o in e)n.push(e[o].split("$"));var i=n.length;2==a.data.data[t].type_id_1&&(a.data.data[t].vod_remarks="更新至"+i+"集"),a.data.data[t].vod_pic=c.url_replace(a.data.data[t].vod_pic)}r.setData({searching:!0,search_list:a.data.data})}})},gotoplay:function(a){console.log(a),wx.navigateTo({url:"../play/play?id="+a.currentTarget.dataset.vid})},url_replace:function(e){var n="";return[["pic.china-gif.com","img.pic-imges.com"],["pic.china-gif.com","rpg.pic-imges.com"]].forEach(function(a,t){n=e.replace(a[0],a[1])}),n}}); 
 			}); 	require("sg_movie/pages/search/search.js");
 		__wxRoute = 'sg_movie/pages/about/about';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'sg_movie/pages/about/about.js';	define("sg_movie/pages/about/about.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var app=getApp();Page({data:{},onLoad:function(n){this.getAbout()},onReady:function(){},onShow:function(){},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){},getAbout:function(){var t=this;app.util.request({url:"entry/wxapp/about",data:{},success:function(n){console.log(n),t.setData({about:n.data.data})}})}}); 
 			}); 	require("sg_movie/pages/about/about.js");
 		__wxRoute = 'sg_movie/pages/record/record';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'sg_movie/pages/record/record.js';	define("sg_movie/pages/record/record.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var app=getApp();Page({data:{},onLoad:function(n){this.getRecordList()},onReady:function(){},onShow:function(){},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){},getRecordList:function(){var t=this;app.util.request({url:"entry/wxapp/recordList",data:{},success:function(n){console.log(n),t.setData({recordlist:n.data.data})}})}}); 
 			}); 	require("sg_movie/pages/record/record.js");
 		__wxRoute = 'sg_movie/pages/tv/tv';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'sg_movie/pages/tv/tv.js';	define("sg_movie/pages/tv/tv.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Page({data:{},onLoad:function(n){},onReady:function(){},onShow:function(){},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){}}); 
 			}); 	require("sg_movie/pages/tv/tv.js");
 		__wxRoute = 'sg_movie/pages/web/web';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'sg_movie/pages/web/web.js';	define("sg_movie/pages/web/web.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Page({data:{query:{}},onLoad:function(n){console.log(n.query),this.setData({query:JSON.parse(decodeURIComponent(n.query))})},onReady:function(){},onShow:function(){},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){}}); 
 			}); 	require("sg_movie/pages/web/web.js");
 	