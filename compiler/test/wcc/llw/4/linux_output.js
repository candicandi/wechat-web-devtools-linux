/*v0.5vv_20200413_syb_scopedata*/window.__wcc_version__='v0.5vv_20200413_syb_scopedata';window.__wcc_version_info__={"customComponents":true,"fixZeroRpx":true,"propValueDeepCopy":false};
var $gwxc
var $gaic={}
$7061636b616765436f6d706f6e656e742f=function(path,global){
if(typeof global === 'undefined') global={};if(typeof __WXML_GLOBAL__ === 'undefined') {__WXML_GLOBAL__={};
}__WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
$gwx('init', global);
function _(a,b){if(typeof(b)!='undefined')a.children.push(b);}
function _v(k){if(typeof(k)!='undefined')return {tag:'virtual','wxKey':k,children:[]};return {tag:'virtual',children:[]};}
function _n(tag){$gwxc++;if($gwxc>=16000){throw 'Dom limit exceeded, please check if there\'s any mistake you\'ve made.'};return {tag:'wx-'+tag,attr:{},children:[],n:[],raw:{},generics:{}}}
function _p(a,b){b&&a.properities.push(b);}
function _s(scope,env,key){return typeof(scope[key])!='undefined'?scope[key]:env[key]}
function _wp(m){console.warn("WXMLRT_$7061636b616765436f6d706f6e656e742f:"+m)}
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

function _gv( )
{if( typeof( window.__webview_engine_version__) == 'undefined' ) return 0.0;
return window.__webview_engine_version__;}
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
var cs
__WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
__WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
__WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
var z=__WXML_GLOBAL__.ops_set.$7061636b616765436f6d706f6e656e742f || [];
function gz$7061636b616765436f6d706f6e656e742f_1(){
if( __WXML_GLOBAL__.ops_cached.$7061636b616765436f6d706f6e656e742f_1)return __WXML_GLOBAL__.ops_cached.$7061636b616765436f6d706f6e656e742f_1
__WXML_GLOBAL__.ops_cached.$7061636b616765436f6d706f6e656e742f_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[2,'==='],[[7],[3,'renderingMode']],[1,'canvas']])
Z([3,'barrage-area'])
Z([a,[3,'z-index: '],[[7],[3,'zIndex']],[3,';']])
Z([3,'weui-canvas'])
Z([3,'width: 100%; height: 100%;'])
Z([3,'2d'])
Z(z[1])
Z([a,[3,'opacity: '],[[7],[3,'alpha']],[3,'; font: '],[[7],[3,'font']],[3,'; padding: '],[[7],[3,'padding']],[3,'; z-index: '],z[2][2],z[2][3]])
Z([3,'tunnelId'])
Z([3,'tunnel'])
Z([[7],[3,'tunnels']])
Z(z[8])
Z([3,'barrage-tunnel'])
Z([a,[3,'height: '],[[6],[[7],[3,'tunnel']],[3,'height']],[3,'px; border-top-width: '],[[2,'?:'],[[7],[3,'tunnelShow']],[1,1],[1,0]],[3,'px']])
Z([3,'tunnel-tips'])
Z([[2,'!'],[[7],[3,'tunnelShow']]])
Z([a,[3,'轨道'],[[7],[3,'tunnelId']]])
Z([3,'bulletId'])
Z([3,'bullet'])
Z([[6],[[7],[3,'tunnel']],[3,'bullets']])
Z(z[17])
Z([3,'onAnimationend'])
Z([3,'onTapBullet'])
Z([a,[3,'bullet-item '],[[2,'?:'],[[2,'>'],[[6],[[7],[3,'bullet']],[3,'duration']],[1,0]],[1,'bullet-move'],[1,'']],[3,' '],[[2,'?:'],[[6],[[7],[3,'bullet']],[3,'paused']],[1,'paused'],[1,'']]])
Z([[7],[3,'bulletId']])
Z([[7],[3,'tunnelId']])
Z([a,[3,'color: '],[[2,'?:'],[[6],[[7],[3,'bullet']],[3,'paused']],[1,'#fff'],[[6],[[7],[3,'bullet']],[3,'color']]],[3,'; height: '],z[13][2],[3,'px; line-height: '],z[13][2],[3,'px; animation-duration: '],[[6],[[7],[3,'bullet']],[3,'duration']],[3,'s; animation-play-state: '],[[2,'?:'],[[6],[[7],[3,'bullet']],[3,'paused']],[1,'paused'],[1,'running']]])
Z([[6],[[6],[[7],[3,'bullet']],[3,'image']],[3,'head']])
Z([3,'bullet-item_img'])
Z([3,'aspectFit'])
Z([[6],[[6],[[6],[[7],[3,'bullet']],[3,'image']],[3,'head']],[3,'src']])
Z([a,[3,'width: '],[[2,'||'],[[6],[[6],[[6],[[7],[3,'bullet']],[3,'image']],[3,'head']],[3,'width']],[[7],[3,'fontSize']]],[3,'px; height: '],[[6],[[6],[[6],[[7],[3,'bullet']],[3,'image']],[3,'head']],[3,'height']],[3,'px; margin-right: '],[[2,'||'],[[6],[[6],[[6],[[7],[3,'bullet']],[3,'image']],[3,'head']],[3,'gap']],[1,4]],[3,'px;']])
Z([3,'bullet-item_text'])
Z([3,'opacity: 1;'])
Z([a,[[6],[[7],[3,'bullet']],[3,'content']]])
Z([[6],[[6],[[7],[3,'bullet']],[3,'image']],[3,'tail']])
Z(z[28])
Z(z[29])
Z([[6],[[6],[[6],[[7],[3,'bullet']],[3,'image']],[3,'tail']],[3,'src']])
Z([a,z[31][1],[[2,'||'],[[6],[[6],[[6],[[7],[3,'bullet']],[3,'image']],[3,'tail']],[3,'width']],[[7],[3,'fontSize']]],z[31][3],[[6],[[6],[[6],[[7],[3,'bullet']],[3,'image']],[3,'tail']],[3,'height']],[3,'px; margin-left: '],[[2,'||'],[[6],[[6],[[6],[[7],[3,'bullet']],[3,'image']],[3,'tail']],[3,'gap']],[1,4]],z[31][7]])
})(__WXML_GLOBAL__.ops_cached.$7061636b616765436f6d706f6e656e742f_1);return __WXML_GLOBAL__.ops_cached.$7061636b616765436f6d706f6e656e742f_1
}
function gz$7061636b616765436f6d706f6e656e742f_2(){
if( __WXML_GLOBAL__.ops_cached.$7061636b616765436f6d706f6e656e742f_2)return __WXML_GLOBAL__.ops_cached.$7061636b616765436f6d706f6e656e742f_2
__WXML_GLOBAL__.ops_cached.$7061636b616765436f6d706f6e656e742f_2=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'wx-recycle-item'])
})(__WXML_GLOBAL__.ops_cached.$7061636b616765436f6d706f6e656e742f_2);return __WXML_GLOBAL__.ops_cached.$7061636b616765436f6d706f6e656e742f_2
}
function gz$7061636b616765436f6d706f6e656e742f_3(){
if( __WXML_GLOBAL__.ops_cached.$7061636b616765436f6d706f6e656e742f_3)return __WXML_GLOBAL__.ops_cached.$7061636b616765436f6d706f6e656e742f_3
__WXML_GLOBAL__.ops_cached.$7061636b616765436f6d706f6e656e742f_3=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'_beginToScroll'])
Z([3,'wrap'])
Z([3,'content'])
Z([a,[3,'height:'],[[2,'?:'],[[7],[3,'useInPage']],[[2,'+'],[[2,'+'],[[7],[3,'totalHeight']],[[2,'?:'],[[7],[3,'hasBeforeSlotHeight']],[[7],[3,'beforeSlotHeight']],[1,0]]],[[2,'?:'],[[7],[3,'hasAfterSlotHeight']],[[7],[3,'afterSlotHeight']],[1,0]]],[[7],[3,'height']]],[3,'px;width:'],[[7],[3,'width']],[3,'px;transform:translateZ(0);-webkit-transform:translateZ(0);']])
Z([3,'_scrollViewDidScroll'])
Z([3,'_scrollToLower'])
Z([3,'_scrollToUpper'])
Z(z[2])
Z([[7],[3,'enableBackToTop']])
Z([[7],[3,'lowerThreshold']])
Z([[7],[3,'innerScrollIntoView']])
Z([[7],[3,'innerScrollTop']])
Z([[7],[3,'scrollWithAnimation']])
Z([1,false])
Z([[2,'?:'],[[7],[3,'useInPage']],[1,false],[[7],[3,'scrollY']]])
Z([3,'height:100%;position: relative;'])
Z([[7],[3,'throttle']])
Z([[7],[3,'upperThreshold']])
Z([3,'position: absolute;z-index:1;width:100%;left: 0;top: 0;opacity: 0;visibility: hidden;'])
Z([3,'itemsize'])
Z([3,'slot-before'])
Z([a,z[3][1],[[2,'?:'],[[7],[3,'hasBeforeSlotHeight']],[[2,'+'],[[7],[3,'beforeSlotHeight']],[1,'px']],[1,'auto']]])
Z([3,'before'])
Z([a,[3,'position:relative;width:100%;z-index:10;background: url(\x22'],[[7],[3,'placeholderImageStr']],[3,'\x22) repeat;height:'],[[7],[3,'totalHeight']],[3,'px;']])
Z([a,[3,'position: absolute;left:0;width:100%;top:'],[[7],[3,'innerBeforeHeight']],z[23][5]])
Z([3,'slot-after'])
Z([a,z[3][1],[[2,'?:'],[[7],[3,'hasAfterSlotHeight']],[[2,'+'],[[7],[3,'afterSlotHeight']],[1,'px']],[1,'auto']]])
Z([3,'after'])
})(__WXML_GLOBAL__.ops_cached.$7061636b616765436f6d706f6e656e742f_3);return __WXML_GLOBAL__.ops_cached.$7061636b616765436f6d706f6e656e742f_3
}
function gz$7061636b616765436f6d706f6e656e742f_4(){
if( __WXML_GLOBAL__.ops_cached.$7061636b616765436f6d706f6e656e742f_4)return __WXML_GLOBAL__.ops_cached.$7061636b616765436f6d706f6e656e742f_4
__WXML_GLOBAL__.ops_cached.$7061636b616765436f6d706f6e656e742f_4=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'use2dCanvas']])
Z([3,'weui-canvas'])
Z([a,[3,'width: '],[[7],[3,'width']],[3,'px; height: '],[[7],[3,'height']],[3,'px;']])
Z([3,'2d'])
Z(z[1])
Z([a,z[2][1],z[2][2],z[2][3],z[2][4],z[2][5]])
})(__WXML_GLOBAL__.ops_cached.$7061636b616765436f6d706f6e656e742f_4);return __WXML_GLOBAL__.ops_cached.$7061636b616765436f6d706f6e656e742f_4
}
function gz$7061636b616765436f6d706f6e656e742f_5(){
if( __WXML_GLOBAL__.ops_cached.$7061636b616765436f6d706f6e656e742f_5)return __WXML_GLOBAL__.ops_cached.$7061636b616765436f6d706f6e656e742f_5
__WXML_GLOBAL__.ops_cached.$7061636b616765436f6d706f6e656e742f_5=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'container page'])
Z([[7],[3,'theme']])
Z([[8],'title',[1,'canvas 2d']])
Z([3,'head'])
Z([3,'page-body'])
Z([[7],[3,'canIUse']])
Z([3,'page-section'])
Z([3,'page-section-spacing'])
Z([3,'page-body-wrapper'])
Z([3,'canvas'])
Z([3,'canvas2D'])
Z([3,'2d'])
Z([3,'margin: 15px; text-align:center'])
Z([3,'\n      微信版本过低，暂不支持本功能\n    '])
Z([3,'foot'])
})(__WXML_GLOBAL__.ops_cached.$7061636b616765436f6d706f6e656e742f_5);return __WXML_GLOBAL__.ops_cached.$7061636b616765436f6d706f6e656e742f_5
}
function gz$7061636b616765436f6d706f6e656e742f_6(){
if( __WXML_GLOBAL__.ops_cached.$7061636b616765436f6d706f6e656e742f_6)return __WXML_GLOBAL__.ops_cached.$7061636b616765436f6d706f6e656e742f_6
__WXML_GLOBAL__.ops_cached.$7061636b616765436f6d706f6e656e742f_6=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'container page'])
Z([[7],[3,'theme']])
Z([[8],'title',[1,'webgl']])
Z([3,'head'])
Z([3,'page-body'])
Z([[7],[3,'canIUse']])
Z([3,'page-section'])
Z([3,'page-body-wrapper'])
Z([3,'canvas'])
Z([3,'canvasWebGL'])
Z([3,'webgl'])
Z([3,'margin: 15px; text-align:center'])
Z([3,'\n      微信版本过低，暂不支持本功能\n    '])
Z([3,'foot'])
})(__WXML_GLOBAL__.ops_cached.$7061636b616765436f6d706f6e656e742f_6);return __WXML_GLOBAL__.ops_cached.$7061636b616765436f6d706f6e656e742f_6
}
function gz$7061636b616765436f6d706f6e656e742f_7(){
if( __WXML_GLOBAL__.ops_cached.$7061636b616765436f6d706f6e656e742f_7)return __WXML_GLOBAL__.ops_cached.$7061636b616765436f6d706f6e656e742f_7
__WXML_GLOBAL__.ops_cached.$7061636b616765436f6d706f6e656e742f_7=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'container page'])
Z([[7],[3,'theme']])
Z([[8],'title',[1,'icon']])
Z([3,'head'])
Z([3,'icon-box'])
Z([3,'icon-box-img'])
Z([3,'93'])
Z([3,'success'])
Z([3,'icon-box-ctn'])
Z([3,'icon-box-title'])
Z([3,'成功'])
Z([3,'icon-box-desc'])
Z([3,'用于表示操作顺利完成'])
Z(z[4])
Z(z[5])
Z(z[6])
Z([3,'info'])
Z(z[8])
Z(z[9])
Z([3,'提示'])
Z(z[11])
Z([3,'用于表示信息提示；也常用于缺乏条件的操作拦截，提示用户所需信息'])
Z(z[4])
Z(z[5])
Z([3,'#C9C9C9'])
Z(z[6])
Z([3,'warn'])
Z(z[8])
Z(z[9])
Z([3,'普通警告'])
Z(z[11])
Z([3,'用于表示操作后将引起一定后果的情况；也用于表示由于系统原因而造成的负向结果'])
Z(z[4])
Z(z[5])
Z(z[6])
Z(z[26])
Z(z[8])
Z(z[9])
Z([3,'强烈警告'])
Z(z[11])
Z([3,'用于表示由于用户原因造成的负向结果；也用于表示操作后将引起不可挽回的严重后果的情况'])
Z(z[4])
Z(z[5])
Z(z[6])
Z([3,'waiting'])
Z(z[8])
Z(z[9])
Z([3,'等待'])
Z(z[11])
Z([3,'用于表示等待，告知用户结果需等待'])
Z(z[4])
Z([3,'icon-small-wrp'])
Z([3,'icon-small'])
Z([3,'23'])
Z([3,'success_no_circle'])
Z(z[8])
Z(z[9])
Z([3,'多选控件图标_已选择'])
Z(z[11])
Z([3,'用于多选控件中，表示已选择该项目'])
Z(z[4])
Z(z[51])
Z(z[52])
Z(z[53])
Z([3,'circle'])
Z(z[8])
Z(z[9])
Z([3,'多选控件图标_未选择'])
Z(z[11])
Z([3,'用于多选控件中，表示该项目可被选择，但还未选择'])
Z(z[4])
Z(z[51])
Z(z[52])
Z(z[53])
Z(z[26])
Z(z[8])
Z(z[9])
Z([3,'错误提示'])
Z(z[11])
Z([3,'用于在表单中表示出现错误'])
Z(z[4])
Z(z[51])
Z(z[52])
Z(z[53])
Z(z[7])
Z(z[8])
Z(z[9])
Z([3,'单选控件图标_已选择'])
Z(z[11])
Z([3,'用于单选控件中，表示已选择该项目'])
Z(z[4])
Z(z[51])
Z(z[52])
Z(z[53])
Z([3,'download'])
Z(z[8])
Z(z[9])
Z([3,'下载'])
Z(z[11])
Z([3,'用于表示可下载'])
Z(z[4])
Z(z[51])
Z(z[52])
Z(z[53])
Z([3,'info_circle'])
Z(z[8])
Z(z[9])
Z(z[19])
Z(z[11])
Z([3,'用于在表单中表示有信息提示'])
Z(z[4])
Z(z[51])
Z(z[52])
Z(z[53])
Z([3,'cancel'])
Z(z[8])
Z(z[9])
Z([3,'停止或关闭'])
Z(z[11])
Z([3,'用于在表单中，表示关闭或停止'])
Z(z[4])
Z(z[51])
Z(z[52])
Z([3,'14'])
Z([3,'search'])
Z(z[8])
Z(z[9])
Z([3,'搜索'])
Z(z[11])
Z([3,'用于搜索控件中，表示可搜索'])
Z([3,'foot'])
})(__WXML_GLOBAL__.ops_cached.$7061636b616765436f6d706f6e656e742f_7);return __WXML_GLOBAL__.ops_cached.$7061636b616765436f6d706f6e656e742f_7
}
function gz$7061636b616765436f6d706f6e656e742f_8(){
if( __WXML_GLOBAL__.ops_cached.$7061636b616765436f6d706f6e656e742f_8)return __WXML_GLOBAL__.ops_cached.$7061636b616765436f6d706f6e656e742f_8
__WXML_GLOBAL__.ops_cached.$7061636b616765436f6d706f6e656e742f_8=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'container page'])
Z([[7],[3,'theme']])
Z([[8],'title',[1,'progress']])
Z([3,'head'])
Z([3,'page-body'])
Z([3,'page-section page-section-gap'])
Z([3,'progress-box'])
Z([3,'20'])
Z([3,'3'])
Z(z[6])
Z([3,'40'])
Z(z[8])
Z([3,'progress-cancel'])
Z([3,'cancel'])
Z(z[6])
Z([3,'60'])
Z(z[8])
Z(z[6])
Z([3,'#10AEFF'])
Z([3,'80'])
Z(z[8])
Z([3,'foot'])
})(__WXML_GLOBAL__.ops_cached.$7061636b616765436f6d706f6e656e742f_8);return __WXML_GLOBAL__.ops_cached.$7061636b616765436f6d706f6e656e742f_8
}
function gz$7061636b616765436f6d706f6e656e742f_9(){
if( __WXML_GLOBAL__.ops_cached.$7061636b616765436f6d706f6e656e742f_9)return __WXML_GLOBAL__.ops_cached.$7061636b616765436f6d706f6e656e742f_9
__WXML_GLOBAL__.ops_cached.$7061636b616765436f6d706f6e656e742f_9=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'container page'])
Z([[7],[3,'theme']])
Z([[8],'title',[1,'rich-text']])
Z([3,'head'])
Z([3,'page-body'])
Z([3,'page-section'])
Z([3,'page-section-title'])
Z([3,'通过HTML String渲染'])
Z([3,'page-content'])
Z([a,[[7],[3,'htmlSnip']]])
Z([3,'renderHtml'])
Z([3,'primary'])
Z([3,'渲染HTML'])
Z([[7],[3,'renderedByHtml']])
Z([[7],[3,'htmlSnip']])
Z(z[5])
Z(z[6])
Z([3,'通过节点渲染'])
Z(z[8])
Z([a,[[7],[3,'nodeSnip']]])
Z([3,'renderNode'])
Z(z[11])
Z([3,'渲染Node'])
Z([[7],[3,'renderedByNode']])
Z([[7],[3,'nodes']])
Z([3,'foot'])
})(__WXML_GLOBAL__.ops_cached.$7061636b616765436f6d706f6e656e742f_9);return __WXML_GLOBAL__.ops_cached.$7061636b616765436f6d706f6e656e742f_9
}
function gz$7061636b616765436f6d706f6e656e742f_10(){
if( __WXML_GLOBAL__.ops_cached.$7061636b616765436f6d706f6e656e742f_10)return __WXML_GLOBAL__.ops_cached.$7061636b616765436f6d706f6e656e742f_10
__WXML_GLOBAL__.ops_cached.$7061636b616765436f6d706f6e656e742f_10=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'container page'])
Z([[7],[3,'theme']])
Z([[8],'title',[1,'text']])
Z([3,'head'])
Z([3,'page-body'])
Z([3,'page-section page-section-spacing'])
Z([3,'text-box'])
Z([[7],[3,'scrollTop']])
Z([3,'true'])
Z([a,[[7],[3,'text']]])
Z([3,'add'])
Z([[2,'!'],[[7],[3,'canAdd']]])
Z([3,'add line'])
Z([3,'remove'])
Z([[2,'!'],[[7],[3,'canRemove']]])
Z([3,'remove line'])
Z([3,'foot'])
})(__WXML_GLOBAL__.ops_cached.$7061636b616765436f6d706f6e656e742f_10);return __WXML_GLOBAL__.ops_cached.$7061636b616765436f6d706f6e656e742f_10
}
function gz$7061636b616765436f6d706f6e656e742f_11(){
if( __WXML_GLOBAL__.ops_cached.$7061636b616765436f6d706f6e656e742f_11)return __WXML_GLOBAL__.ops_cached.$7061636b616765436f6d706f6e656e742f_11
__WXML_GLOBAL__.ops_cached.$7061636b616765436f6d706f6e656e742f_11=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'container page'])
Z([[7],[3,'theme']])
Z([[8],'title',[1,'button']])
Z([3,'head'])
Z([3,'page-body'])
Z([3,'btn-area'])
Z([3,'buttonContainer'])
Z([3,'primary'])
Z([3,'页面主操作 Normal'])
Z([3,'true'])
Z(z[7])
Z([3,'页面主操作 Loading'])
Z(z[9])
Z(z[7])
Z([3,'页面主操作 Disabled'])
Z([3,'default'])
Z([3,'页面次要操作 Normal'])
Z(z[9])
Z(z[15])
Z([3,'页面次要操作 Disabled'])
Z([3,'warn'])
Z([3,'警告类操作 Normal'])
Z(z[9])
Z(z[20])
Z([3,'警告类操作 Disabled'])
Z([3,'button-sp-area'])
Z(z[9])
Z(z[7])
Z([3,'按钮'])
Z(z[9])
Z(z[9])
Z(z[7])
Z([3,'不可点击的按钮'])
Z(z[9])
Z(z[15])
Z(z[28])
Z(z[9])
Z(z[9])
Z(z[15])
Z(z[28])
Z([3,'mini-btn'])
Z([3,'mini'])
Z(z[7])
Z(z[28])
Z(z[40])
Z(z[41])
Z(z[15])
Z(z[28])
Z(z[40])
Z(z[41])
Z(z[20])
Z(z[28])
Z([3,'handleContact'])
Z([3,'contact'])
Z([3,'临时会话'])
Z([1,true])
Z(z[7])
Z([3,'打开客服会话'])
Z([3,'share'])
Z(z[7])
Z([3,'触发用户转发'])
Z([3,'handleGetPhoneNumber'])
Z([3,'getPhoneNumber'])
Z(z[7])
Z([3,'获取用户手机号'])
Z([[7],[3,'canIUseGetUserProfile']])
Z([3,'handleGetUserProfile'])
Z([3,'zh_CN'])
Z(z[7])
Z([3,' 获取用户信息 '])
Z([3,'handleGetUserInfo'])
Z(z[67])
Z([3,'getUserInfo'])
Z(z[7])
Z([3,'获取用户信息'])
Z([3,'handleOpenSetting'])
Z([3,'openSetting'])
Z(z[7])
Z([3,'打开设置授权页'])
Z([3,'feedback'])
Z(z[7])
Z([3,'打开意见反馈'])
Z([3,'foot'])
})(__WXML_GLOBAL__.ops_cached.$7061636b616765436f6d706f6e656e742f_11);return __WXML_GLOBAL__.ops_cached.$7061636b616765436f6d706f6e656e742f_11
}
function gz$7061636b616765436f6d706f6e656e742f_12(){
if( __WXML_GLOBAL__.ops_cached.$7061636b616765436f6d706f6e656e742f_12)return __WXML_GLOBAL__.ops_cached.$7061636b616765436f6d706f6e656e742f_12
__WXML_GLOBAL__.ops_cached.$7061636b616765436f6d706f6e656e742f_12=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'container page'])
Z([[7],[3,'theme']])
Z([[8],'title',[1,'checkbox']])
Z([3,'head'])
Z([3,'page-body'])
Z([3,'page-section page-section-gap'])
Z([3,'page-section-title'])
Z([3,'默认样式'])
Z([3,'checkbox'])
Z([3,'true'])
Z([3,'cb'])
Z([3,'选中\n      '])
Z(z[8])
Z(z[10])
Z([3,'未选中\n      '])
Z([3,'page-section'])
Z(z[6])
Z([3,'推荐展示样式'])
Z([3,'weui-cells weui-cells_after-title'])
Z([3,'checkboxChange'])
Z([[7],[3,'items']])
Z([[6],[[7],[3,'item']],[3,'value']])
Z([3,'weui-cell weui-check__label'])
Z([3,'weui-cell__hd'])
Z([[6],[[7],[3,'item']],[3,'checked']])
Z(z[21])
Z([3,'weui-cell__bd'])
Z([a,[[6],[[7],[3,'item']],[3,'name']]])
Z([3,'foot'])
})(__WXML_GLOBAL__.ops_cached.$7061636b616765436f6d706f6e656e742f_12);return __WXML_GLOBAL__.ops_cached.$7061636b616765436f6d706f6e656e742f_12
}
function gz$7061636b616765436f6d706f6e656e742f_13(){
if( __WXML_GLOBAL__.ops_cached.$7061636b616765436f6d706f6e656e742f_13)return __WXML_GLOBAL__.ops_cached.$7061636b616765436f6d706f6e656e742f_13
__WXML_GLOBAL__.ops_cached.$7061636b616765436f6d706f6e656e742f_13=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'container'])
Z([a,[3,'height:'],[[7],[3,'editorHeight']],[3,'px;']])
Z([3,'onEditorReady'])
Z([3,'onStatusChange'])
Z([3,'ql-container'])
Z([3,'editor'])
Z([[7],[3,'placeholder']])
Z([3,'format'])
Z([3,'toolbar'])
Z([1,false])
Z([a,[3,'bottom: '],[[2,'?:'],[[7],[3,'isIOS']],[[7],[3,'keyboardHeight']],[1,0]],[3,'px; height: '],[[7],[3,'toolBarHeight']],z[1][3]])
Z([3,'insertImage'])
Z([3,'iconfont icon-charutupian'])
Z([a,[3,'iconfont icon-format-header-2 '],[[2,'?:'],[[2,'==='],[[6],[[7],[3,'formats']],[3,'header']],[1,2]],[1,'ql-active'],[1,'']]])
Z([3,'header'])
Z([1,2])
Z([a,[3,'iconfont icon-format-header-3 '],[[2,'?:'],[[2,'==='],[[6],[[7],[3,'formats']],[3,'header']],[1,3]],[1,'ql-active'],[1,'']]])
Z(z[14])
Z([1,3])
Z([a,[3,'iconfont icon-zitijiacu '],[[2,'?:'],[[6],[[7],[3,'formats']],[3,'bold']],[1,'ql-active'],[1,'']]])
Z([3,'bold'])
Z([a,[3,'iconfont icon-zitixieti '],[[2,'?:'],[[6],[[7],[3,'formats']],[3,'italic']],[1,'ql-active'],[1,'']]])
Z([3,'italic'])
Z([a,[3,'iconfont icon-zitixiahuaxian '],[[2,'?:'],[[6],[[7],[3,'formats']],[3,'underline']],[1,'ql-active'],[1,'']]])
Z([3,'underline'])
Z([3,'iconfont icon--checklist'])
Z([3,'list'])
Z([3,'check'])
Z([a,[3,'iconfont icon-youxupailie '],[[2,'?:'],[[2,'==='],[[6],[[7],[3,'formats']],[3,'list']],[1,'ordered']],[1,'ql-active'],[1,'']]])
Z(z[26])
Z([3,'ordered'])
Z([a,[3,'iconfont icon-wuxupailie '],[[2,'?:'],[[2,'==='],[[6],[[7],[3,'formats']],[3,'list']],[1,'bullet']],[1,'ql-active'],[1,'']]])
Z(z[26])
Z([3,'bullet'])
})(__WXML_GLOBAL__.ops_cached.$7061636b616765436f6d706f6e656e742f_13);return __WXML_GLOBAL__.ops_cached.$7061636b616765436f6d706f6e656e742f_13
}
function gz$7061636b616765436f6d706f6e656e742f_14(){
if( __WXML_GLOBAL__.ops_cached.$7061636b616765436f6d706f6e656e742f_14)return __WXML_GLOBAL__.ops_cached.$7061636b616765436f6d706f6e656e742f_14
__WXML_GLOBAL__.ops_cached.$7061636b616765436f6d706f6e656e742f_14=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'container page'])
Z([[7],[3,'theme']])
Z([[8],'title',[1,'form']])
Z([3,'head'])
Z([3,'page-body'])
Z([3,'formReset'])
Z([3,'formSubmit'])
Z([3,'page-section page-section-gap'])
Z([3,'page-section-title'])
Z([3,'switch'])
Z([3,'switch'])
Z(z[7])
Z(z[8])
Z([3,'radio'])
Z([3,'radio'])
Z([3,'radio1'])
Z([3,'选项一'])
Z([3,'radio2'])
Z([3,'选项二'])
Z(z[7])
Z(z[8])
Z([3,'checkbox'])
Z([3,'checkbox'])
Z([3,'checkbox1'])
Z(z[16])
Z([3,'checkbox2'])
Z(z[18])
Z(z[7])
Z(z[8])
Z([3,'slider'])
Z([3,'slider'])
Z([3,'50'])
Z([3,'page-section'])
Z(z[8])
Z([3,'input'])
Z([3,'weui-cells weui-cells_after-title'])
Z([3,'weui-cell weui-cell_input'])
Z([3,'weui-cell__bd'])
Z([3,'weui-input'])
Z([3,'input'])
Z([3,'这是一个输入框'])
Z([3,'btn-area'])
Z([3,'submit'])
Z([3,'primary'])
Z([3,'Submit'])
Z([3,'reset'])
Z([3,'Reset'])
Z([3,'foot'])
})(__WXML_GLOBAL__.ops_cached.$7061636b616765436f6d706f6e656e742f_14);return __WXML_GLOBAL__.ops_cached.$7061636b616765436f6d706f6e656e742f_14
}
function gz$7061636b616765436f6d706f6e656e742f_15(){
if( __WXML_GLOBAL__.ops_cached.$7061636b616765436f6d706f6e656e742f_15)return __WXML_GLOBAL__.ops_cached.$7061636b616765436f6d706f6e656e742f_15
__WXML_GLOBAL__.ops_cached.$7061636b616765436f6d706f6e656e742f_15=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'container page'])
Z([[7],[3,'theme']])
Z([[8],'title',[1,'input']])
Z([3,'head'])
Z([3,'page-body'])
Z([3,'page-section'])
Z([3,'weui-cells__title'])
Z([3,'可以自动聚焦的input'])
Z([3,'weui-cells weui-cells_after-title'])
Z([3,'weui-cell weui-cell_input'])
Z([3,'weui-input'])
Z([3,'将会获取焦点'])
Z(z[5])
Z(z[6])
Z([3,'控制最大输入长度的input'])
Z(z[8])
Z(z[9])
Z(z[10])
Z([3,'10'])
Z([3,'最大输入长度为10'])
Z(z[5])
Z(z[6])
Z([a,[3,'实时获取输入值：'],[[7],[3,'inputValue']]])
Z(z[8])
Z(z[9])
Z([3,'bindKeyInput'])
Z(z[10])
Z(z[18])
Z([3,'输入同步到view中'])
Z(z[5])
Z(z[6])
Z([3,'控制输入的input'])
Z(z[8])
Z(z[9])
Z([3,'bindReplaceInput'])
Z(z[10])
Z([3,'连续的两个1会变成2'])
Z(z[5])
Z(z[6])
Z([3,'控制键盘的input'])
Z(z[8])
Z(z[9])
Z([3,'bindHideKeyboard'])
Z(z[10])
Z([3,'输入123自动收起键盘'])
Z(z[5])
Z(z[6])
Z([3,'数字输入的input'])
Z(z[8])
Z(z[9])
Z(z[10])
Z([3,'这是一个数字输入框'])
Z([3,'number'])
Z(z[5])
Z(z[6])
Z([3,'密码输入的input'])
Z(z[8])
Z(z[9])
Z(z[10])
Z([3,'这是一个密码输入框'])
Z([3,'text'])
Z(z[5])
Z(z[6])
Z([3,'带小数点的input'])
Z(z[8])
Z(z[9])
Z(z[10])
Z([3,'带小数点的数字键盘'])
Z([3,'digit'])
Z(z[5])
Z(z[6])
Z([3,'身份证输入的input'])
Z(z[8])
Z(z[9])
Z(z[10])
Z([3,'身份证输入键盘'])
Z([3,'idcard'])
Z(z[5])
Z(z[6])
Z([3,'控制占位符颜色的input'])
Z(z[8])
Z(z[9])
Z(z[10])
Z([3,'占位符字体是红色的'])
Z([3,'color:#F76260'])
Z([3,'foot'])
})(__WXML_GLOBAL__.ops_cached.$7061636b616765436f6d706f6e656e742f_15);return __WXML_GLOBAL__.ops_cached.$7061636b616765436f6d706f6e656e742f_15
}
function gz$7061636b616765436f6d706f6e656e742f_16(){
if( __WXML_GLOBAL__.ops_cached.$7061636b616765436f6d706f6e656e742f_16)return __WXML_GLOBAL__.ops_cached.$7061636b616765436f6d706f6e656e742f_16
__WXML_GLOBAL__.ops_cached.$7061636b616765436f6d706f6e656e742f_16=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'container page'])
Z([[7],[3,'theme']])
Z([[8],'title',[1,'label']])
Z([3,'head'])
Z([3,'page-body'])
Z([3,'page-section page-section-gap'])
Z([3,'page-section-title'])
Z([3,'表单组件在label内'])
Z([3,'checkboxChange'])
Z([3,'group'])
Z([[7],[3,'checkboxItems']])
Z([3,'label-1'])
Z([[6],[[7],[3,'item']],[3,'checked']])
Z([[6],[[7],[3,'item']],[3,'name']])
Z([3,'label-1-text'])
Z([a,[[6],[[7],[3,'item']],[3,'value']]])
Z(z[5])
Z(z[6])
Z([3,'label用for标识表单组件'])
Z([3,'radioChange'])
Z(z[9])
Z([[7],[3,'radioItems']])
Z([3,'label-2'])
Z(z[12])
Z(z[13])
Z(z[13])
Z([3,'label-2-text'])
Z(z[13])
Z([a,[[6],[[7],[3,'item']],[3,'name']]])
Z(z[5])
Z(z[6])
Z([3,'label内有多个时选中第一个'])
Z([3,'label-3'])
Z([3,'checkbox-3'])
Z([3,'选项一'])
Z(z[33])
Z([3,'选项二'])
Z([3,'label-3-text'])
Z([3,'点击该label下的文字默认选中第一个checkbox'])
Z([3,'foot'])
})(__WXML_GLOBAL__.ops_cached.$7061636b616765436f6d706f6e656e742f_16);return __WXML_GLOBAL__.ops_cached.$7061636b616765436f6d706f6e656e742f_16
}
function gz$7061636b616765436f6d706f6e656e742f_17(){
if( __WXML_GLOBAL__.ops_cached.$7061636b616765436f6d706f6e656e742f_17)return __WXML_GLOBAL__.ops_cached.$7061636b616765436f6d706f6e656e742f_17
__WXML_GLOBAL__.ops_cached.$7061636b616765436f6d706f6e656e742f_17=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'container page'])
Z([[7],[3,'theme']])
Z([[8],'title',[1,'picker-view']])
Z([3,'head'])
Z([3,'page-body'])
Z([3,'selected-date'])
Z([a,[[7],[3,'year']],[3,'年'],[[7],[3,'month']],[3,'月'],[[7],[3,'day']],[3,'日'],[[2,'?:'],[[7],[3,'isDaytime']],[1,'白天'],[1,'夜晚']]])
Z([3,'bindChange'])
Z([3,'height: 50px;'])
Z([3,'width: 100%; height: 300px;'])
Z([[7],[3,'value']])
Z([[7],[3,'years']])
Z(z[11])
Z([3,'line-height: 50px; text-align: center;'])
Z([a,[[7],[3,'item']],z[6][2]])
Z([[7],[3,'months']])
Z(z[15])
Z(z[13])
Z([a,z[14][1],z[6][4]])
Z([[7],[3,'days']])
Z(z[19])
Z(z[13])
Z([a,z[14][1],z[6][6]])
Z([3,'icon-container'])
Z([3,'picker-icon'])
Z([3,'../../../resources/kind/daytime.png'])
Z(z[23])
Z(z[24])
Z([3,'../../../resources/kind/night.png'])
Z([3,'foot'])
})(__WXML_GLOBAL__.ops_cached.$7061636b616765436f6d706f6e656e742f_17);return __WXML_GLOBAL__.ops_cached.$7061636b616765436f6d706f6e656e742f_17
}
function gz$7061636b616765436f6d706f6e656e742f_18(){
if( __WXML_GLOBAL__.ops_cached.$7061636b616765436f6d706f6e656e742f_18)return __WXML_GLOBAL__.ops_cached.$7061636b616765436f6d706f6e656e742f_18
__WXML_GLOBAL__.ops_cached.$7061636b616765436f6d706f6e656e742f_18=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'container page'])
Z([[7],[3,'theme']])
Z([[8],'title',[1,'picker']])
Z([3,'head'])
Z([3,'page-body'])
Z([3,'page-section'])
Z([3,'weui-cells__title'])
Z([3,'地区选择器'])
Z([3,'weui-cells weui-cells_after-title'])
Z([3,'weui-cell weui-cell_input'])
Z([3,'weui-cell__hd'])
Z([3,'weui-label'])
Z([3,'当前选择'])
Z([3,'weui-cell__bd'])
Z([3,'bindPickerChange'])
Z([[7],[3,'array']])
Z([[7],[3,'index']])
Z([3,'weui-input'])
Z([a,[[6],[[7],[3,'array']],[[7],[3,'index']]]])
Z(z[6])
Z([3,'时间选择器'])
Z(z[8])
Z(z[9])
Z(z[10])
Z(z[11])
Z(z[12])
Z(z[13])
Z([3,'bindTimeChange'])
Z([3,'21:01'])
Z([3,'time'])
Z([3,'09:01'])
Z([[7],[3,'time']])
Z(z[17])
Z([a,[[7],[3,'time']]])
Z(z[6])
Z([3,'日期选择器'])
Z(z[8])
Z(z[9])
Z(z[10])
Z(z[11])
Z(z[12])
Z(z[13])
Z([3,'bindDateChange'])
Z([3,'2017-09-01'])
Z([3,'date'])
Z([3,'2015-09-01'])
Z([[7],[3,'date']])
Z(z[17])
Z([a,[[7],[3,'date']]])
Z([3,'foot'])
})(__WXML_GLOBAL__.ops_cached.$7061636b616765436f6d706f6e656e742f_18);return __WXML_GLOBAL__.ops_cached.$7061636b616765436f6d706f6e656e742f_18
}
function gz$7061636b616765436f6d706f6e656e742f_19(){
if( __WXML_GLOBAL__.ops_cached.$7061636b616765436f6d706f6e656e742f_19)return __WXML_GLOBAL__.ops_cached.$7061636b616765436f6d706f6e656e742f_19
__WXML_GLOBAL__.ops_cached.$7061636b616765436f6d706f6e656e742f_19=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'container page'])
Z([[7],[3,'theme']])
Z([[8],'title',[1,'radio']])
Z([3,'head'])
Z([3,'page-body'])
Z([3,'page-section page-section-gap'])
Z([3,'page-section-title'])
Z([3,'默认样式'])
Z([3,'radio'])
Z([3,'true'])
Z([3,'r1'])
Z([3,'选中\n      '])
Z(z[8])
Z([3,'r2'])
Z([3,'未选中\n      '])
Z([3,'page-section'])
Z(z[6])
Z([3,'推荐展示样式'])
Z([3,'weui-cells weui-cells_after-title'])
Z([3,'radioChange'])
Z([[7],[3,'items']])
Z([[6],[[7],[3,'item']],[3,'value']])
Z([3,'weui-cell weui-check__label'])
Z([3,'weui-cell__hd'])
Z(z[9])
Z(z[21])
Z([3,'weui-cell__bd'])
Z([a,[[6],[[7],[3,'item']],[3,'name']]])
Z([3,'foot'])
})(__WXML_GLOBAL__.ops_cached.$7061636b616765436f6d706f6e656e742f_19);return __WXML_GLOBAL__.ops_cached.$7061636b616765436f6d706f6e656e742f_19
}
function gz$7061636b616765436f6d706f6e656e742f_20(){
if( __WXML_GLOBAL__.ops_cached.$7061636b616765436f6d706f6e656e742f_20)return __WXML_GLOBAL__.ops_cached.$7061636b616765436f6d706f6e656e742f_20
__WXML_GLOBAL__.ops_cached.$7061636b616765436f6d706f6e656e742f_20=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'container page'])
Z([[7],[3,'theme']])
Z([[8],'title',[1,'slider']])
Z([3,'head'])
Z([3,'page-body'])
Z([3,'page-section page-section-gap'])
Z([3,'page-section-title'])
Z([3,'设置step'])
Z([3,'body-view'])
Z([3,'slider2change'])
Z([3,'5'])
Z([3,'60'])
Z(z[5])
Z(z[6])
Z([3,'显示当前value'])
Z(z[8])
Z([3,'slider3change'])
Z([3,'50'])
Z(z[5])
Z(z[6])
Z([3,'设置最小/最大值'])
Z(z[8])
Z([3,'slider4change'])
Z([3,'200'])
Z(z[17])
Z([3,'100'])
Z([3,'foot'])
})(__WXML_GLOBAL__.ops_cached.$7061636b616765436f6d706f6e656e742f_20);return __WXML_GLOBAL__.ops_cached.$7061636b616765436f6d706f6e656e742f_20
}
function gz$7061636b616765436f6d706f6e656e742f_21(){
if( __WXML_GLOBAL__.ops_cached.$7061636b616765436f6d706f6e656e742f_21)return __WXML_GLOBAL__.ops_cached.$7061636b616765436f6d706f6e656e742f_21
__WXML_GLOBAL__.ops_cached.$7061636b616765436f6d706f6e656e742f_21=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'container page'])
Z([[7],[3,'theme']])
Z([[8],'title',[1,'switch']])
Z([3,'head'])
Z([3,'page-body'])
Z([3,'page-section page-section-gap'])
Z([3,'page-section-title'])
Z([3,'默认样式'])
Z([3,'body-view'])
Z([3,'switch1Change'])
Z([3,'switch2Change'])
Z([3,'page-section'])
Z(z[6])
Z([3,'推荐展示样式'])
Z([3,'weui-cells weui-cells_after-title'])
Z([3,'weui-cell weui-cell_switch'])
Z([3,'weui-cell__bd'])
Z([3,'开启中'])
Z([3,'weui-cell__ft'])
Z(z[15])
Z(z[16])
Z([3,'关闭'])
Z(z[18])
Z([3,'foot'])
})(__WXML_GLOBAL__.ops_cached.$7061636b616765436f6d706f6e656e742f_21);return __WXML_GLOBAL__.ops_cached.$7061636b616765436f6d706f6e656e742f_21
}
function gz$7061636b616765436f6d706f6e656e742f_22(){
if( __WXML_GLOBAL__.ops_cached.$7061636b616765436f6d706f6e656e742f_22)return __WXML_GLOBAL__.ops_cached.$7061636b616765436f6d706f6e656e742f_22
__WXML_GLOBAL__.ops_cached.$7061636b616765436f6d706f6e656e742f_22=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'container page'])
Z([[7],[3,'theme']])
Z([[8],'title',[1,'textarea']])
Z([3,'head'])
Z([3,'page-body'])
Z([3,'page-section'])
Z([3,'page-section-title'])
Z([3,'输入区域高度自适应，不会出现滚动条'])
Z([3,'textarea-wrp'])
Z([3,'bindTextAreaBlur'])
Z(z[5])
Z(z[6])
Z([3,'这是一个可以自动聚焦的textarea'])
Z(z[8])
Z([3,'true'])
Z([3,'height: 3em'])
Z([3,'foot'])
})(__WXML_GLOBAL__.ops_cached.$7061636b616765436f6d706f6e656e742f_22);return __WXML_GLOBAL__.ops_cached.$7061636b616765436f6d706f6e656e742f_22
}
function gz$7061636b616765436f6d706f6e656e742f_23(){
if( __WXML_GLOBAL__.ops_cached.$7061636b616765436f6d706f6e656e742f_23)return __WXML_GLOBAL__.ops_cached.$7061636b616765436f6d706f6e656e742f_23
__WXML_GLOBAL__.ops_cached.$7061636b616765436f6d706f6e656e742f_23=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'container page'])
Z([[7],[3,'theme']])
Z([[8],'title',[1,'map']])
Z([3,'head'])
Z([3,'page-body'])
Z([3,'page-section-title'])
Z([3,'当前组件使用了墨渊底图样式，查看'])
Z([3,'navigator'])
Z([3,'/packageComponent/pages/map-styles/map-styles'])
Z([3,'查看更多'])
Z([3,'。'])
Z([3,'page-section page-section-gap'])
Z([[7],[3,'enable3d']])
Z([[7],[3,'enableOverlooking']])
Z([[7],[3,'enableRotate']])
Z([[7],[3,'enableSatellite']])
Z([[7],[3,'enableScroll']])
Z([[7],[3,'enableTraffic']])
Z([[7],[3,'enableZoom']])
Z([[7],[3,'latitude']])
Z([[7],[3,'longitude']])
Z([[7],[3,'markers']])
Z([[2,'?:'],[[7],[3,'drawPolygon']],[[7],[3,'polygons']],[[4],[[5]]]])
Z([1,18])
Z([[7],[3,'showCompass']])
Z([3,'width: 100%; height: 300px;'])
Z([[7],[3,'subKey']])
Z([3,'page-section'])
Z([3,'btn-area'])
Z([3,'toggle3d'])
Z([3,'default'])
Z([a,[3,'\n        '],[[2,'?:'],[[2,'!'],[[7],[3,'enable3d']]],[1,'启用'],[1,'关闭']],[3,'3D效果\n      ']])
Z([3,'toggleShowCompass'])
Z(z[30])
Z([a,z[31][1],[[2,'?:'],[[2,'!'],[[7],[3,'showCompass']]],[1,'显示'],[1,'关闭']],[3,'指南针\n      ']])
Z([3,'toggleOverlooking'])
Z(z[30])
Z([a,z[31][1],[[2,'?:'],[[2,'!'],[[7],[3,'enableOverlooking']]],[1,'开启'],[1,'关闭']],[3,'俯视支持\n      ']])
Z([3,'toggleRotate'])
Z(z[30])
Z([a,z[31][1],[[2,'?:'],[[2,'!'],[[7],[3,'enableRotate']]],[1,'开启'],[1,'关闭']],[3,'旋转支持\n      ']])
Z([3,'togglePolygon'])
Z(z[30])
Z([a,z[31][1],[[2,'?:'],[[2,'!'],[[7],[3,'drawPolygon']]],[1,'绘制'],[1,'清除']],[3,'多边形\n      ']])
Z([3,'toggleZoom'])
Z(z[30])
Z([a,z[31][1],[[2,'?:'],[[2,'!'],[[7],[3,'enableZoom']]],[1,'开启'],[1,'关闭']],[3,'缩放支持\n      ']])
Z([3,'toggleScroll'])
Z(z[30])
Z([a,z[31][1],[[2,'?:'],[[2,'!'],[[7],[3,'enableScroll']]],[1,'开启'],[1,'关闭']],[3,'拖动支持\n      ']])
Z([3,'toggleSatellite'])
Z(z[30])
Z([a,z[31][1],[[2,'?:'],[[2,'!'],[[7],[3,'enableSatellite']]],[1,'开启'],[1,'关闭']],[3,'卫星图\n      ']])
Z([3,'toggleTraffic'])
Z(z[30])
Z([a,z[31][1],[[2,'?:'],[[2,'!'],[[7],[3,'enableTraffic']]],[1,'开启'],[1,'关闭']],[3,'实时路况\n      ']])
Z([3,'foot'])
})(__WXML_GLOBAL__.ops_cached.$7061636b616765436f6d706f6e656e742f_23);return __WXML_GLOBAL__.ops_cached.$7061636b616765436f6d706f6e656e742f_23
}
function gz$7061636b616765436f6d706f6e656e742f_24(){
if( __WXML_GLOBAL__.ops_cached.$7061636b616765436f6d706f6e656e742f_24)return __WXML_GLOBAL__.ops_cached.$7061636b616765436f6d706f6e656e742f_24
__WXML_GLOBAL__.ops_cached.$7061636b616765436f6d706f6e656e742f_24=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'container page'])
Z([[7],[3,'theme']])
Z([[8],'title',[1,'camera']])
Z([3,'head'])
Z([3,'page-body'])
Z([3,'page-body-wrapper'])
Z([3,'margin-bottom: 10px'])
Z([3,' camera 组件 '])
Z([3,'error'])
Z([[7],[3,'position']])
Z([3,'off'])
Z([[7],[3,'showCanvas']])
Z([3,'info-container'])
Z([3,'margin: 10px 0'])
Z([3,'使用实时数据帧在 canvas 组件的展示'])
Z([a,[3,'\n            帧高度：'],[[7],[3,'frameHeight']],[3,'  帧宽度：'],[[7],[3,'frameWidth']],[3,'\n          ']])
Z([3,'canvas'])
Z([3,'webgl'])
Z([a,[3,'width: '],[[7],[3,'width']],[3,'px; height: '],[[7],[3,'height']],[3,'px;']])
Z(z[17])
Z([3,'btn-area first-btn'])
Z([3,'handleShowCanvas'])
Z([3,'primary'])
Z([a,[[2,'?:'],[[7],[3,'showCanvas']],[1,'关闭实时帧数据模式'],[1,'开启实时帧数据模式']]])
Z([3,'btn-area'])
Z([3,'togglePosition'])
Z(z[22])
Z([3,'切换摄像头'])
Z(z[24])
Z([3,'takePhoto'])
Z(z[22])
Z([3,'拍照'])
Z(z[24])
Z([3,'startRecord'])
Z(z[22])
Z([3,'开始录像'])
Z(z[24])
Z([3,'stopRecord'])
Z(z[22])
Z([3,'结束录像'])
Z(z[24])
Z([3,'none'])
Z([3,'/packageComponent/pages/media/camera-scan-code/camera-scan-code'])
Z(z[22])
Z([3,'扫描一维码'])
Z([3,'preview-tips'])
Z([3,'点击录像或拍照即可在下方预览效果'])
Z([[7],[3,'src']])
Z([3,'photo'])
Z([3,'widthFix'])
Z(z[47])
Z([[7],[3,'videoSrc']])
Z([3,'video'])
Z(z[51])
Z([3,'foot'])
})(__WXML_GLOBAL__.ops_cached.$7061636b616765436f6d706f6e656e742f_24);return __WXML_GLOBAL__.ops_cached.$7061636b616765436f6d706f6e656e742f_24
}
function gz$7061636b616765436f6d706f6e656e742f_25(){
if( __WXML_GLOBAL__.ops_cached.$7061636b616765436f6d706f6e656e742f_25)return __WXML_GLOBAL__.ops_cached.$7061636b616765436f6d706f6e656e742f_25
__WXML_GLOBAL__.ops_cached.$7061636b616765436f6d706f6e656e742f_25=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'container page'])
Z([[7],[3,'theme']])
Z([[8],'title',[1,'image']])
Z([3,'head'])
Z([3,'page-body'])
Z([3,'page-section page-section-gap'])
Z([3,'page-section-title'])
Z([3,'Local Image'])
Z([3,'page-section-ctn'])
Z([3,'image'])
Z([3,'../../../resources/pic/1.jpg'])
Z(z[5])
Z(z[6])
Z([3,'Internet Image'])
Z(z[8])
Z(z[9])
Z([3,'https://res.wx.qq.com/op_res/gNITiJpSsxIqUDS1yDf91HzMi82cW3Ty5yfvLu_NIkWH3P0vsKDmtdAcpIWMfAJN'])
Z(z[5])
Z(z[6])
Z([3,'Webp Image'])
Z(z[8])
Z(z[9])
Z([3,'aspectFit'])
Z([[7],[3,'webpImageUrl']])
Z([3,'foot'])
})(__WXML_GLOBAL__.ops_cached.$7061636b616765436f6d706f6e656e742f_25);return __WXML_GLOBAL__.ops_cached.$7061636b616765436f6d706f6e656e742f_25
}
function gz$7061636b616765436f6d706f6e656e742f_26(){
if( __WXML_GLOBAL__.ops_cached.$7061636b616765436f6d706f6e656e742f_26)return __WXML_GLOBAL__.ops_cached.$7061636b616765436f6d706f6e656e742f_26
__WXML_GLOBAL__.ops_cached.$7061636b616765436f6d706f6e656e742f_26=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'container page'])
Z([[7],[3,'theme']])
Z([[8],'title',[1,'live-player']])
Z([3,'head'])
Z([3,'page-body'])
Z([3,'page-section'])
Z([3,'handleLivePlayerError'])
Z([3,'handleLivePlayerStateChange'])
Z([3,'player'])
Z([3,'RTC'])
Z([[7],[3,'videoSrc']])
Z(z[5])
Z([3,'page-url'])
Z([3,'视频地址 (支持flv, rtmp):'])
Z([3,'handleVideoSrcInput'])
Z([3,'input'])
Z(z[15])
Z([3,'视频播放链接'])
Z(z[10])
Z([3,'handleScanQRCode'])
Z([3,'primary'])
Z([3,'\n        扫码\n      '])
Z(z[5])
Z([3,'handlePlay'])
Z([3,'page-body-button'])
Z(z[20])
Z([3,'播放'])
Z([3,'handlePause'])
Z(z[24])
Z(z[20])
Z([3,'暂停'])
Z([3,'handleStop'])
Z(z[24])
Z(z[20])
Z([3,'停止'])
Z([3,'handleResume'])
Z(z[24])
Z(z[20])
Z([3,'恢复'])
Z([3,'handleMute'])
Z(z[24])
Z(z[20])
Z([3,'静音'])
Z([3,'foot'])
})(__WXML_GLOBAL__.ops_cached.$7061636b616765436f6d706f6e656e742f_26);return __WXML_GLOBAL__.ops_cached.$7061636b616765436f6d706f6e656e742f_26
}
function gz$7061636b616765436f6d706f6e656e742f_27(){
if( __WXML_GLOBAL__.ops_cached.$7061636b616765436f6d706f6e656e742f_27)return __WXML_GLOBAL__.ops_cached.$7061636b616765436f6d706f6e656e742f_27
__WXML_GLOBAL__.ops_cached.$7061636b616765436f6d706f6e656e742f_27=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'container page'])
Z([[7],[3,'theme']])
Z([[8],'title',[1,'live-pusher']])
Z([3,'head'])
Z([3,'page-body'])
Z([3,'page-section'])
Z([3,'handleLivePusherError'])
Z([3,'handleLivePusherStateChange'])
Z([3,'pusher'])
Z([3,'RTC'])
Z([[7],[3,'videoSrc']])
Z(z[5])
Z([3,'page-url'])
Z([3,'视频地址 (支持rtmp):'])
Z([3,'handleVideoSrcInput'])
Z([3,'input'])
Z([3,'视频推送链接'])
Z(z[10])
Z([3,'handleScanQRCode'])
Z([3,'primary'])
Z([3,'\n        扫码\n      '])
Z(z[5])
Z([3,'handleStart'])
Z([3,'page-body-button'])
Z(z[19])
Z([3,'开始'])
Z([3,'handlePause'])
Z(z[23])
Z(z[19])
Z([3,'暂停'])
Z([3,'handleStop'])
Z(z[23])
Z(z[19])
Z([3,'停止'])
Z([3,'handleResume'])
Z(z[23])
Z(z[19])
Z([3,'恢复'])
Z([3,'handleSwitchCamera'])
Z(z[23])
Z(z[19])
Z([3,'切换摄像头'])
Z([3,'foot'])
})(__WXML_GLOBAL__.ops_cached.$7061636b616765436f6d706f6e656e742f_27);return __WXML_GLOBAL__.ops_cached.$7061636b616765436f6d706f6e656e742f_27
}
function gz$7061636b616765436f6d706f6e656e742f_28(){
if( __WXML_GLOBAL__.ops_cached.$7061636b616765436f6d706f6e656e742f_28)return __WXML_GLOBAL__.ops_cached.$7061636b616765436f6d706f6e656e742f_28
__WXML_GLOBAL__.ops_cached.$7061636b616765436f6d706f6e656e742f_28=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'container page'])
Z([[7],[3,'theme']])
Z([[8],'title',[1,'video']])
Z([3,'head'])
Z([3,'page-body'])
Z([3,'page-section tc'])
Z([3,'bindVideoEnterPictureInPicture'])
Z([3,'videoErrorCallback'])
Z([3,'bindVideoLeavePictureInPicture'])
Z([[7],[3,'danmuList']])
Z([[7],[3,'enableAutoRotation']])
Z([3,'myVideo'])
Z([1,true])
Z([[4],[[5],[[5],[1,'push']],[1,'pop']]])
Z([1,false])
Z(z[12])
Z(z[12])
Z([3,'http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey\x3d30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400\x26bizid\x3d1023\x26hy\x3dSH\x26fileparam\x3d302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400'])
Z([3,'auto-rotate-container'])
Z([3,'开启自动旋转'])
Z([3,'handleSwitchChange'])
Z(z[10])
Z([3,'weui-cells'])
Z([3,'weui-cell weui-cell_input'])
Z([3,'weui-cell__hd'])
Z([3,'weui-label'])
Z([3,'弹幕内容'])
Z([3,'weui-cell__bd'])
Z([3,'bindInputBlur'])
Z([3,'weui-input'])
Z([3,'在此处输入弹幕内容'])
Z([3,'text'])
Z([3,'btn-area'])
Z([3,'bindSendDanmu'])
Z([3,'page-body-button'])
Z([3,'submit'])
Z([3,'primary'])
Z([3,'发送弹幕'])
Z(z[32])
Z([3,'other-navigator-hover'])
Z([3,'picture-in-picture'])
Z([3,'bindPlayVideo'])
Z(z[34])
Z(z[36])
Z([3,'小窗模式'])
Z([3,'foot'])
})(__WXML_GLOBAL__.ops_cached.$7061636b616765436f6d706f6e656e742f_28);return __WXML_GLOBAL__.ops_cached.$7061636b616765436f6d706f6e656e742f_28
}
function gz$7061636b616765436f6d706f6e656e742f_29(){
if( __WXML_GLOBAL__.ops_cached.$7061636b616765436f6d706f6e656e742f_29)return __WXML_GLOBAL__.ops_cached.$7061636b616765436f6d706f6e656e742f_29
__WXML_GLOBAL__.ops_cached.$7061636b616765436f6d706f6e656e742f_29=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'container page'])
Z([[7],[3,'theme']])
Z([[8],'title',[1,'navigator']])
Z([3,'head'])
Z([3,'page-body'])
Z([3,'btn-area'])
Z([3,'ohter-navigator'])
Z([3,'navigate?title\x3dnavigate'])
Z([3,'default'])
Z([3,'跳转到新页面'])
Z([3,'other-navigator-hover'])
Z([3,'redirect?title\x3dredirect'])
Z(z[8])
Z([3,'在当前页打开'])
Z([3,'wx4f1b24bdc99fa23b'])
Z(z[10])
Z([3,'navigate'])
Z([3,'miniProgram'])
Z([3,'release'])
Z(z[8])
Z([3,'打开小程序'])
Z([3,'foot'])
})(__WXML_GLOBAL__.ops_cached.$7061636b616765436f6d706f6e656e742f_29);return __WXML_GLOBAL__.ops_cached.$7061636b616765436f6d706f6e656e742f_29
}
function gz$7061636b616765436f6d706f6e656e742f_30(){
if( __WXML_GLOBAL__.ops_cached.$7061636b616765436f6d706f6e656e742f_30)return __WXML_GLOBAL__.ops_cached.$7061636b616765436f6d706f6e656e742f_30
__WXML_GLOBAL__.ops_cached.$7061636b616765436f6d706f6e656e742f_30=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'container page'])
Z([[7],[3,'theme']])
Z([[8],'title',[1,'无障碍访问']])
Z([3,'head'])
Z([3,'page-body'])
Z([3,'page-section'])
Z([3,'page-section-title'])
Z([3,'无障碍访问说明'])
Z([3,'page-section-spacing'])
Z([3,'text-box'])
Z([3,'为了更好地满足视障人士\n对于小程序的访问需求\n基础库自2.7.1起，支持部分ARIA标签\n无障碍特性在读屏模式下可以访问'])
Z(z[5])
Z(z[6])
Z([3,'例子'])
Z(z[8])
Z([3,'提交表单'])
Z([3,'button'])
Z([3,'text-align: center'])
Z([3,'提交'])
Z([3,'foot'])
})(__WXML_GLOBAL__.ops_cached.$7061636b616765436f6d706f6e656e742f_30);return __WXML_GLOBAL__.ops_cached.$7061636b616765436f6d706f6e656e742f_30
}
function gz$7061636b616765436f6d706f6e656e742f_31(){
if( __WXML_GLOBAL__.ops_cached.$7061636b616765436f6d706f6e656e742f_31)return __WXML_GLOBAL__.ops_cached.$7061636b616765436f6d706f6e656e742f_31
__WXML_GLOBAL__.ops_cached.$7061636b616765436f6d706f6e656e742f_31=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'container page'])
Z([[7],[3,'theme']])
Z([[8],'title',[1,'ad']])
Z([3,'head'])
Z([3,'page-body'])
Z([3,'page-section page-section-gap'])
Z([3,'page-section-title'])
Z([3,'关注卡片'])
Z([3,'adunit-demo4'])
Z([[2,'==='],[[7],[3,'platform']],[1,'ios']])
Z(z[5])
Z(z[6])
Z([3,'下载卡片'])
Z([3,'adunit-demo8'])
Z(z[5])
Z(z[6])
Z(z[12])
Z([3,'adunit-demo9'])
Z(z[9])
Z(z[5])
Z(z[6])
Z([3,'应用推广'])
Z([3,'adunit-demo2'])
Z(z[5])
Z(z[6])
Z(z[21])
Z([3,'adunit-demo7'])
Z(z[5])
Z(z[6])
Z([3,'公众号推广'])
Z([3,'adunit-demo3'])
Z(z[5])
Z(z[6])
Z([3,'活动推广'])
Z([3,'adunit-demo5'])
Z(z[5])
Z(z[6])
Z([3,'商品推广'])
Z([3,'adunit-demo6'])
Z([3,'foot'])
})(__WXML_GLOBAL__.ops_cached.$7061636b616765436f6d706f6e656e742f_31);return __WXML_GLOBAL__.ops_cached.$7061636b616765436f6d706f6e656e742f_31
}
function gz$7061636b616765436f6d706f6e656e742f_32(){
if( __WXML_GLOBAL__.ops_cached.$7061636b616765436f6d706f6e656e742f_32)return __WXML_GLOBAL__.ops_cached.$7061636b616765436f6d706f6e656e742f_32
__WXML_GLOBAL__.ops_cached.$7061636b616765436f6d706f6e656e742f_32=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'container page'])
Z([[7],[3,'theme']])
Z([[8],'title',[1,'open-data']])
Z([3,'head'])
Z([3,'page-body'])
Z([3,'avatar'])
Z([3,'avatar-img'])
Z([3,'zh_CN'])
Z([3,'userAvatarUrl'])
Z([3,'page-section'])
Z([3,'weui-cells weui-cells_after-title'])
Z([3,'weui-cell weui-cell_input'])
Z([3,'weui-cell__hd'])
Z([3,'weui-label'])
Z([3,'昵称'])
Z([3,'weui-cell__bd'])
Z([3,'weui-input'])
Z(z[7])
Z([3,'userNickName'])
Z(z[11])
Z(z[12])
Z(z[13])
Z([3,'性别'])
Z(z[15])
Z(z[16])
Z(z[7])
Z([3,'userGender'])
Z(z[11])
Z(z[12])
Z(z[13])
Z([3,'地区'])
Z(z[15])
Z(z[16])
Z([3,'country'])
Z(z[7])
Z([3,'userCountry'])
Z([3,'province'])
Z(z[7])
Z([3,'userProvince'])
Z([3,'city'])
Z(z[7])
Z([3,'userCity'])
Z(z[11])
Z(z[12])
Z(z[13])
Z([3,'语言'])
Z(z[15])
Z(z[16])
Z(z[7])
Z([3,'userLanguage'])
Z([3,'foot'])
})(__WXML_GLOBAL__.ops_cached.$7061636b616765436f6d706f6e656e742f_32);return __WXML_GLOBAL__.ops_cached.$7061636b616765436f6d706f6e656e742f_32
}
function gz$7061636b616765436f6d706f6e656e742f_33(){
if( __WXML_GLOBAL__.ops_cached.$7061636b616765436f6d706f6e656e742f_33)return __WXML_GLOBAL__.ops_cached.$7061636b616765436f6d706f6e656e742f_33
__WXML_GLOBAL__.ops_cached.$7061636b616765436f6d706f6e656e742f_33=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'https://developers.weixin.qq.com/miniprogram/introduction/'])
})(__WXML_GLOBAL__.ops_cached.$7061636b616765436f6d706f6e656e742f_33);return __WXML_GLOBAL__.ops_cached.$7061636b616765436f6d706f6e656e742f_33
}
function gz$7061636b616765436f6d706f6e656e742f_34(){
if( __WXML_GLOBAL__.ops_cached.$7061636b616765436f6d706f6e656e742f_34)return __WXML_GLOBAL__.ops_cached.$7061636b616765436f6d706f6e656e742f_34
__WXML_GLOBAL__.ops_cached.$7061636b616765436f6d706f6e656e742f_34=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'container page'])
Z([[7],[3,'theme']])
Z([[8],'title',[1,'cover-view']])
Z([3,'head'])
Z([3,'page-body'])
Z([3,'page-section page-section-gap'])
Z([[7],[3,'latitude']])
Z([[7],[3,'longitude']])
Z([3,'width: 100%; height: 300px;'])
Z([3,'cover-view'])
Z([3,'container'])
Z([3,'flex-wrp'])
Z([3,'flex-direction:row;'])
Z([3,'flex-item demo-text-1'])
Z([3,'flex-item demo-text-2'])
Z([3,'flex-item demo-text-3'])
Z([3,'foot'])
})(__WXML_GLOBAL__.ops_cached.$7061636b616765436f6d706f6e656e742f_34);return __WXML_GLOBAL__.ops_cached.$7061636b616765436f6d706f6e656e742f_34
}
function gz$7061636b616765436f6d706f6e656e742f_35(){
if( __WXML_GLOBAL__.ops_cached.$7061636b616765436f6d706f6e656e742f_35)return __WXML_GLOBAL__.ops_cached.$7061636b616765436f6d706f6e656e742f_35
__WXML_GLOBAL__.ops_cached.$7061636b616765436f6d706f6e656e742f_35=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'container page'])
Z([[7],[3,'theme']])
Z([[8],'title',[1,'movable-view']])
Z([3,'head'])
Z([3,'page-body'])
Z([3,'page-section'])
Z([3,'page-section-title first'])
Z([3,'movable-view区域小于movable-area'])
Z([3,'all'])
Z([[7],[3,'x']])
Z([[7],[3,'y']])
Z([3,'text'])
Z([3,'btn-area'])
Z([3,'tap'])
Z([3,'page-body-button'])
Z([3,'primary'])
Z([3,'点击移动到 (30px, 30px)'])
Z(z[5])
Z([3,'page-section-title'])
Z([3,'movable-view区域大于movable-area'])
Z([3,'max'])
Z(z[8])
Z(z[11])
Z(z[5])
Z(z[18])
Z([3,'只可以横向移动'])
Z([3,'horizontal'])
Z(z[11])
Z(z[5])
Z(z[18])
Z([3,'只可以纵向移动'])
Z([3,'vertical'])
Z(z[11])
Z(z[5])
Z(z[18])
Z([3,'可超出边界'])
Z(z[8])
Z(z[11])
Z(z[5])
Z(z[18])
Z([3,'带有惯性'])
Z(z[8])
Z(z[11])
Z(z[5])
Z(z[18])
Z([3,'可放缩'])
Z([3,'onChange'])
Z([3,'onScale'])
Z(z[8])
Z([3,'4'])
Z([3,'0.5'])
Z([[7],[3,'scale']])
Z(z[11])
Z(z[12])
Z([3,'tap2'])
Z(z[14])
Z(z[15])
Z([3,'点击放大3倍'])
Z([3,'foot'])
})(__WXML_GLOBAL__.ops_cached.$7061636b616765436f6d706f6e656e742f_35);return __WXML_GLOBAL__.ops_cached.$7061636b616765436f6d706f6e656e742f_35
}
function gz$7061636b616765436f6d706f6e656e742f_36(){
if( __WXML_GLOBAL__.ops_cached.$7061636b616765436f6d706f6e656e742f_36)return __WXML_GLOBAL__.ops_cached.$7061636b616765436f6d706f6e656e742f_36
__WXML_GLOBAL__.ops_cached.$7061636b616765436f6d706f6e656e742f_36=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'container page'])
Z([[7],[3,'theme']])
Z([[8],'title',[1,'scroll-view']])
Z([3,'head'])
Z([3,'page-body'])
Z([3,'page-section'])
Z([3,'page-section-title'])
Z([3,'Vertical Scroll\n纵向滚动'])
Z([3,'page-section-spacing'])
Z([3,'scroll'])
Z([3,'lower'])
Z([3,'upper'])
Z([[7],[3,'toView']])
Z([[7],[3,'scrollTop']])
Z([3,'true'])
Z([3,'height: 150px;'])
Z([3,'scroll-view-item demo-text-1'])
Z([3,'demo1'])
Z([3,'scroll-view-item demo-text-2'])
Z([3,'demo2'])
Z([3,'scroll-view-item demo-text-3'])
Z([3,'demo3'])
Z(z[5])
Z(z[6])
Z([3,'Horizontal Scroll\n横向滚动'])
Z(z[8])
Z(z[9])
Z([3,'scroll-view_H'])
Z(z[14])
Z([3,'width: 100%'])
Z([3,'scroll-view-item_H demo-text-1'])
Z(z[17])
Z([3,'scroll-view-item_H demo-text-2'])
Z(z[19])
Z([3,'scroll-view-item_H demo-text-3'])
Z(z[21])
Z(z[5])
Z(z[6])
Z([3,'自定义下拉刷新\n自定义：'])
Z(z[8])
Z([[6],[[7],[3,'refresh']],[3,'onPulling']])
Z([3,'lightgreen'])
Z([3,'none'])
Z([1,true])
Z([1,80])
Z([3,'width: 100%; height: 400px;'])
Z([3,'refresh-container'])
Z([3,'refresher'])
Z([3,'display: block; width: 100%; height: 80px; background: #ECBDF0; display: flex; align-items: center;'])
Z([3,'view1'])
Z([3,'position: absolute; color: white; text-align: center; width: 100%;'])
Z([3,'\n              下拉刷新\n            '])
Z(z[30])
Z(z[17])
Z(z[32])
Z(z[19])
Z(z[34])
Z(z[21])
Z(z[5])
Z(z[6])
Z([3,'默认：'])
Z(z[8])
Z([3,'onAbort'])
Z([3,'onPulling'])
Z([3,'onRefresh'])
Z([3,'onRestore'])
Z(z[41])
Z([3,'white'])
Z(z[43])
Z([1,100])
Z([[7],[3,'triggered']])
Z(z[45])
Z(z[30])
Z(z[17])
Z(z[32])
Z(z[19])
Z(z[34])
Z(z[21])
Z(z[5])
Z(z[6])
Z([3,'滚动驱动动画'])
Z(z[8])
Z(z[9])
Z(z[10])
Z(z[11])
Z([3,'scroll-view_D'])
Z(z[12])
Z(z[13])
Z(z[14])
Z(z[15])
Z(z[30])
Z([3,'scroll-sample-object1'])
Z(z[32])
Z([3,'scroll-sample-object2'])
Z(z[34])
Z([3,'scroll-sample-object3'])
Z([3,'foot'])
})(__WXML_GLOBAL__.ops_cached.$7061636b616765436f6d706f6e656e742f_36);return __WXML_GLOBAL__.ops_cached.$7061636b616765436f6d706f6e656e742f_36
}
function gz$7061636b616765436f6d706f6e656e742f_37(){
if( __WXML_GLOBAL__.ops_cached.$7061636b616765436f6d706f6e656e742f_37)return __WXML_GLOBAL__.ops_cached.$7061636b616765436f6d706f6e656e742f_37
__WXML_GLOBAL__.ops_cached.$7061636b616765436f6d706f6e656e742f_37=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'container page'])
Z([[7],[3,'theme']])
Z([[8],'title',[1,'swiper']])
Z([3,'head'])
Z([3,'page-body'])
Z([3,'page-section page-section-spacing swiper'])
Z([[7],[3,'autoplay']])
Z([[7],[3,'duration']])
Z([[7],[3,'indicatorDots']])
Z([[7],[3,'interval']])
Z([[7],[3,'background']])
Z([3,'*this'])
Z([a,[3,'swiper-item '],[[7],[3,'item']]])
Z([3,'page-section'])
Z([3,'margin-top: 20px;margin-bottom: 0;'])
Z([3,'weui-cells weui-cells_after-title'])
Z([3,'weui-cell weui-cell_switch'])
Z([3,'weui-cell__bd'])
Z([3,'指示点'])
Z([3,'weui-cell__ft'])
Z([3,'changeIndicatorDots'])
Z(z[8])
Z(z[16])
Z(z[17])
Z([3,'自动播放'])
Z(z[19])
Z([3,'changeAutoplay'])
Z(z[6])
Z([3,'page-section page-section-spacing'])
Z([3,'page-section-title'])
Z([3,'幻灯片切换时长(ms)'])
Z([3,'info'])
Z([a,[[7],[3,'duration']]])
Z([3,'durationChange'])
Z([3,'2000'])
Z([3,'500'])
Z(z[7])
Z(z[29])
Z([3,'自动播放间隔时长(ms)'])
Z(z[31])
Z([a,[[7],[3,'interval']]])
Z([3,'intervalChange'])
Z([3,'10000'])
Z(z[34])
Z(z[9])
Z([3,'foot'])
})(__WXML_GLOBAL__.ops_cached.$7061636b616765436f6d706f6e656e742f_37);return __WXML_GLOBAL__.ops_cached.$7061636b616765436f6d706f6e656e742f_37
}
function gz$7061636b616765436f6d706f6e656e742f_38(){
if( __WXML_GLOBAL__.ops_cached.$7061636b616765436f6d706f6e656e742f_38)return __WXML_GLOBAL__.ops_cached.$7061636b616765436f6d706f6e656e742f_38
__WXML_GLOBAL__.ops_cached.$7061636b616765436f6d706f6e656e742f_38=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'container page'])
Z([[7],[3,'theme']])
Z([[8],'title',[1,'view']])
Z([3,'head'])
Z([3,'page-body'])
Z([3,'page-section'])
Z([3,'page-section-title'])
Z([3,'flex-direction: row\n横向布局'])
Z([3,'page-section-spacing'])
Z([3,'flex-wrp'])
Z([3,'flex-direction:row;'])
Z([3,'flex-item demo-text-1'])
Z([3,'flex-item demo-text-2'])
Z([3,'flex-item demo-text-3'])
Z(z[5])
Z(z[6])
Z([3,'flex-direction: column\n纵向布局'])
Z(z[9])
Z([3,'flex-direction:column;'])
Z([3,'flex-item flex-item-V demo-text-1'])
Z([3,'flex-item flex-item-V demo-text-2'])
Z([3,'flex-item flex-item-V demo-text-3'])
Z([3,'foot'])
})(__WXML_GLOBAL__.ops_cached.$7061636b616765436f6d706f6e656e742f_38);return __WXML_GLOBAL__.ops_cached.$7061636b616765436f6d706f6e656e742f_38
}
function gz$7061636b616765436f6d706f6e656e742f_39(){
if( __WXML_GLOBAL__.ops_cached.$7061636b616765436f6d706f6e656e742f_39)return __WXML_GLOBAL__.ops_cached.$7061636b616765436f6d706f6e656e742f_39
__WXML_GLOBAL__.ops_cached.$7061636b616765436f6d706f6e656e742f_39=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'container page'])
Z([[7],[3,'theme']])
Z([[8],'title',[1,'tabBar']])
Z([3,'head'])
Z([3,'page-body'])
Z([3,'btn-area'])
Z([3,'setTabBarBadge'])
Z([a,[3,'\n        '],[[2,'?:'],[[2,'!'],[[7],[3,'hasSetTabBarBadge']]],[1,'设置tab徽标'],[1,'移除tab徽标']],[3,'\n      ']])
Z([3,'showTabBarRedDot'])
Z([a,z[7][1],[[2,'?:'],[[2,'!'],[[7],[3,'hasShownTabBarRedDot']]],[1,'显示红点'],[1,'移除红点']],z[7][3]])
Z([3,'customStyle'])
Z([a,z[7][1],[[2,'?:'],[[2,'!'],[[7],[3,'hasCustomedStyle']]],[1,'自定义Tab样式'],[1,'移除自定义样式']],z[7][3]])
Z([3,'customItem'])
Z([a,z[7][1],[[2,'?:'],[[2,'!'],[[7],[3,'hasCustomedItem']]],[1,'自定义Tab信息'],[1,'移除自定义信息']],z[7][3]])
Z([3,'hideTabBar'])
Z([a,z[7][1],[[2,'?:'],[[2,'!'],[[7],[3,'hasHiddenTabBar']]],[1,'隐藏TabBar'],[1,'显示TabBar']],z[7][3]])
Z(z[5])
Z([3,'navigateBack'])
Z([3,'primary'])
Z([3,'返回上一级'])
Z([3,'foot'])
})(__WXML_GLOBAL__.ops_cached.$7061636b616765436f6d706f6e656e742f_39);return __WXML_GLOBAL__.ops_cached.$7061636b616765436f6d706f6e656e742f_39
}
function gz$7061636b616765436f6d706f6e656e742f_40(){
if( __WXML_GLOBAL__.ops_cached.$7061636b616765436f6d706f6e656e742f_40)return __WXML_GLOBAL__.ops_cached.$7061636b616765436f6d706f6e656e742f_40
__WXML_GLOBAL__.ops_cached.$7061636b616765436f6d706f6e656e742f_40=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'isSetTabBarPage']])
Z([3,'leaveSetTabBarPage'])
Z([3,'index page'])
Z([[7],[3,'theme']])
Z([3,'index-hd'])
Z([3,'index-logo'])
Z([3,'resources/kind/logo.png'])
Z([3,'index-desc'])
Z([3,'以下将演示小程序接口能力，具体属性参数详见 '])
Z([3,'weui-agree__link'])
Z([3,'/page/component/pages/doc-web-view/doc-web-view'])
Z([3,'小程序开发文档'])
Z([3,'。'])
Z([3,'index-bd'])
Z([3,'kind-list'])
Z([[7],[3,'list']])
Z([[6],[[7],[3,'item']],[3,'id']])
Z([3,'kind-list-item'])
Z([3,'kindToggle'])
Z([a,[3,'kind-list-item-hd '],[[2,'?:'],[[6],[[7],[3,'item']],[3,'open']],[1,'kind-list-item-hd-show'],[1,'']]])
Z(z[16])
Z([3,'kind-list-text'])
Z([a,[[6],[[7],[3,'item']],[3,'name']]])
Z([[2,'==='],[[7],[3,'theme']],[1,'dark']])
Z([3,'kind-list-img'])
Z([a,[3,'resources/kind/'],z[16],[3,'_dark.png']])
Z(z[24])
Z([a,z[25][1],z[16],[3,'.png']])
Z([a,[3,'kind-list-item-bd '],[[2,'?:'],[[6],[[7],[3,'item']],[3,'open']],[1,'kind-list-item-bd-show'],[1,'']]])
Z([a,[3,'navigator-box '],[[2,'?:'],[[6],[[7],[3,'item']],[3,'open']],[1,'navigator-box-show'],[1,'']]])
Z([3,'page'])
Z([[6],[[7],[3,'item']],[3,'pages']])
Z([3,'*item'])
Z([[2,'!=='],[[6],[[7],[3,'page']],[3,'url']],[1,'@set-tab-bar']])
Z([3,'navigator'])
Z([a,[3,'../../packageAPI/pages/'],z[16],[3,'/'],[[6],[[7],[3,'page']],[3,'url']]])
Z([3,'navigator-text'])
Z([a,[[6],[[7],[3,'page']],[3,'zh']]])
Z([3,'navigator-arrow'])
Z([3,'enterSetTabBarPage'])
Z(z[34])
Z(z[36])
Z([a,z[37][1]])
Z(z[38])
})(__WXML_GLOBAL__.ops_cached.$7061636b616765436f6d706f6e656e742f_40);return __WXML_GLOBAL__.ops_cached.$7061636b616765436f6d706f6e656e742f_40
}
function gz$7061636b616765436f6d706f6e656e742f_41(){
if( __WXML_GLOBAL__.ops_cached.$7061636b616765436f6d706f6e656e742f_41)return __WXML_GLOBAL__.ops_cached.$7061636b616765436f6d706f6e656e742f_41
__WXML_GLOBAL__.ops_cached.$7061636b616765436f6d706f6e656e742f_41=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'page'])
Z([[7],[3,'theme']])
Z([3,'index'])
Z([3,'index-hd'])
Z([3,'index-logo'])
Z([3,'resources/kind/logo.png'])
Z([3,'index-desc'])
Z([3,'以下将演示小程序云开发能力，具体属性参数详见 '])
Z([3,'weui-agree__link'])
Z([3,'../../packageAPI/pages/doc-web-view/doc-web-view'])
Z([3,'小程序开发文档'])
Z([3,'。'])
Z([3,'index-bd'])
Z([3,'kind-list'])
Z([[7],[3,'list']])
Z([[6],[[7],[3,'item']],[3,'id']])
Z([3,'kind-list-item'])
Z([3,'kindToggle'])
Z([a,[3,'kind-list-item-hd '],[[2,'?:'],[[6],[[7],[3,'item']],[3,'open']],[1,'kind-list-item-hd-show'],[1,'']]])
Z(z[15])
Z([3,'kind-list-text'])
Z([a,[[6],[[7],[3,'item']],[3,'name']]])
Z([[2,'==='],[[7],[3,'theme']],[1,'dark']])
Z([3,'kind-list-img'])
Z([a,[3,'resources/kind/'],z[15],[3,'_dark.png']])
Z(z[23])
Z([a,z[24][1],z[15],[3,'.png']])
Z([a,[3,'kind-list-item-bd '],[[2,'?:'],[[6],[[7],[3,'item']],[3,'open']],[1,'kind-list-item-bd-show'],[1,'']]])
Z([a,[3,'navigator-box '],[[2,'?:'],[[6],[[7],[3,'item']],[3,'open']],[1,'navigator-box-show'],[1,'']]])
Z(z[0])
Z([[6],[[7],[3,'item']],[3,'pages']])
Z([3,'*item'])
Z([3,'navigator'])
Z([a,[3,'../../packageCloud/pages/'],z[15],[3,'/'],[[6],[[7],[3,'page']],[3,'url']]])
Z([3,'navigator-text'])
Z([a,[[6],[[7],[3,'page']],[3,'zh']]])
Z([3,'navigator-arrow'])
})(__WXML_GLOBAL__.ops_cached.$7061636b616765436f6d706f6e656e742f_41);return __WXML_GLOBAL__.ops_cached.$7061636b616765436f6d706f6e656e742f_41
}
function gz$7061636b616765436f6d706f6e656e742f_42(){
if( __WXML_GLOBAL__.ops_cached.$7061636b616765436f6d706f6e656e742f_42)return __WXML_GLOBAL__.ops_cached.$7061636b616765436f6d706f6e656e742f_42
__WXML_GLOBAL__.ops_cached.$7061636b616765436f6d706f6e656e742f_42=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'foot'])
Z([3,'page-foot'])
Z([3,'none'])
Z([3,'switchTab'])
Z([3,'/page/component/index'])
Z([3,'icon-foot'])
Z([3,'/image/icon_foot.png'])
})(__WXML_GLOBAL__.ops_cached.$7061636b616765436f6d706f6e656e742f_42);return __WXML_GLOBAL__.ops_cached.$7061636b616765436f6d706f6e656e742f_42
}
function gz$7061636b616765436f6d706f6e656e742f_43(){
if( __WXML_GLOBAL__.ops_cached.$7061636b616765436f6d706f6e656e742f_43)return __WXML_GLOBAL__.ops_cached.$7061636b616765436f6d706f6e656e742f_43
__WXML_GLOBAL__.ops_cached.$7061636b616765436f6d706f6e656e742f_43=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'head'])
Z([3,'page-head'])
Z([3,'page-head-title'])
Z([a,[[7],[3,'title']]])
Z([3,'page-head-line'])
Z([[7],[3,'desc']])
Z([3,'page-head-desc'])
Z([a,[[7],[3,'desc']]])
})(__WXML_GLOBAL__.ops_cached.$7061636b616765436f6d706f6e656e742f_43);return __WXML_GLOBAL__.ops_cached.$7061636b616765436f6d706f6e656e742f_43
}
function gz$7061636b616765436f6d706f6e656e742f_44(){
if( __WXML_GLOBAL__.ops_cached.$7061636b616765436f6d706f6e656e742f_44)return __WXML_GLOBAL__.ops_cached.$7061636b616765436f6d706f6e656e742f_44
__WXML_GLOBAL__.ops_cached.$7061636b616765436f6d706f6e656e742f_44=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'page'])
Z([[7],[3,'theme']])
Z([3,'index'])
Z([3,'index-hd'])
Z([3,'index-logo'])
Z([3,'resources/kind/logo.png'])
Z([3,'index-desc'])
Z([3,'以下将展示小程序官方组件能力，组件样式仅供参考，开发者可根据自身需求自定义组件样式，具体属性参数详见 '])
Z([3,'weui-agree__link'])
Z([3,'pages/doc-web-view/doc-web-view'])
Z([3,'小程序开发文档'])
Z([3,'。'])
Z([3,'index-bd'])
Z([3,'kind-list'])
Z([[7],[3,'list']])
Z([[6],[[7],[3,'item']],[3,'id']])
Z([3,'kind-list-item'])
Z([3,'kindToggle'])
Z([a,[3,'kind-list-item-hd '],[[2,'?:'],[[6],[[7],[3,'item']],[3,'open']],[1,'kind-list-item-hd-show'],[1,'']]])
Z(z[15])
Z([3,'kind-list-text'])
Z([a,[[6],[[7],[3,'item']],[3,'name']]])
Z([[2,'==='],[[7],[3,'theme']],[1,'dark']])
Z([3,'kind-list-img'])
Z([a,[3,'resources/kind/'],z[15],[3,'_dark.png']])
Z(z[23])
Z([a,z[24][1],z[15],[3,'.png']])
Z([a,[3,'kind-list-item-bd '],[[2,'?:'],[[6],[[7],[3,'item']],[3,'open']],[1,'kind-list-item-bd-show'],[1,'']]])
Z([a,[3,'navigator-box '],[[2,'?:'],[[6],[[7],[3,'item']],[3,'open']],[1,'navigator-box-show'],[1,'']]])
Z(z[0])
Z([[6],[[7],[3,'item']],[3,'pages']])
Z([3,'*item'])
Z([[6],[[7],[3,'page']],[3,'appid']])
Z(z[32])
Z([3,'navigator'])
Z([3,''])
Z([3,'navigate'])
Z(z[35])
Z([3,'miniProgram'])
Z([3,'release'])
Z([3,'navigator-text'])
Z([a,[[6],[[7],[3,'page']],[3,'name']]])
Z([3,'navigator-arrow'])
Z(z[34])
Z([a,[3,'/packageComponent/pages/'],z[15],[3,'/'],[[7],[3,'page']],[3,'/'],[[7],[3,'page']]])
Z(z[40])
Z([a,[[7],[3,'page']]])
Z(z[42])
})(__WXML_GLOBAL__.ops_cached.$7061636b616765436f6d706f6e656e742f_44);return __WXML_GLOBAL__.ops_cached.$7061636b616765436f6d706f6e656e742f_44
}
function gz$7061636b616765436f6d706f6e656e742f_45(){
if( __WXML_GLOBAL__.ops_cached.$7061636b616765436f6d706f6e656e742f_45)return __WXML_GLOBAL__.ops_cached.$7061636b616765436f6d706f6e656e742f_45
__WXML_GLOBAL__.ops_cached.$7061636b616765436f6d706f6e656e742f_45=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'page'])
Z([[7],[3,'theme']])
Z([3,'index-hd'])
Z([3,'index-logo'])
Z([3,'./images/logo_extended.png'])
Z([3,'index-desc'])
Z([3,'以下是对小程序内置组件能力的补充，包括 WeUI 组件库和一些常见的功能组件，具体属性参数详见 '])
Z([3,'weui-agree__link'])
Z([3,'/page/component/pages/doc-web-view/doc-web-view'])
Z([3,'小程序开发文档'])
Z([3,'。'])
Z([3,'page__bd page-weui page__bd_spacing'])
Z([3,'kind-list'])
Z([[7],[3,'list']])
Z([3,'id'])
Z([3,'kind-list__item'])
Z([3,'kindToggle'])
Z([a,[3,'weui-flex kind-list__item-hd '],[[2,'?:'],[[6],[[7],[3,'item']],[3,'open']],[1,'kind-list__item-hd_show'],[1,'']]])
Z([[6],[[7],[3,'item']],[3,'id']])
Z([3,'weui-flex__item'])
Z([a,[[6],[[7],[3,'item']],[3,'name']]])
Z([3,'kind-list__img'])
Z([a,[3,'images/icon_nav_'],z[18],[3,'.png']])
Z([a,[3,'kind-list__item-bd '],[[2,'?:'],[[6],[[7],[3,'item']],[3,'open']],[1,'kind-list__item-bd_show'],[1,'']]])
Z([a,[3,'weui-cells '],[[2,'?:'],[[6],[[7],[3,'item']],[3,'open']],[1,'weui-cells_show'],[1,'']]])
Z(z[0])
Z([[6],[[7],[3,'item']],[3,'pages']])
Z([3,'*this'])
Z([[6],[[7],[3,'page']],[3,'url']])
Z([3,'weui-cell weui-cell_access'])
Z([a,[3,'../../packageExtend/pages/'],z[28]])
Z([3,'weui-cell__bd'])
Z([a,[[6],[[7],[3,'page']],[3,'zh']]])
Z([3,'weui-cell__ft weui-cell__ft_in-access'])
Z(z[29])
Z([a,z[30][1],[[6],[[7],[3,'item']],[3,'father']],[3,'/'],[[7],[3,'page']],[3,'/'],[[7],[3,'page']]])
Z(z[31])
Z([a,[[7],[3,'page']]])
Z(z[33])
Z([3,'page__ft'])
})(__WXML_GLOBAL__.ops_cached.$7061636b616765436f6d706f6e656e742f_45);return __WXML_GLOBAL__.ops_cached.$7061636b616765436f6d706f6e656e742f_45
}
__WXML_GLOBAL__.ops_set.$7061636b616765436f6d706f6e656e742f=z;
__WXML_GLOBAL__.ops_init.$7061636b616765436f6d706f6e656e742f=true;
var nv_require=function(){var nnm={"m_./packageComponent/pages/view/scroll-view/scroll-view.wxml:refresh":np_0,};var nom={};return function(n){if(n[0]==='p'&&n[1]==='_'&&f_[n.slice(2)])return f_[n.slice(2)];return function(){if(!nnm[n]) return undefined;try{if(!nom[n])nom[n]=nnm[n]();return nom[n];}catch(e){e.message=e.message.replace(/nv_/g,'');var tmp = e.stack.substring(0,e.stack.lastIndexOf(n));e.stack = tmp.substring(0,tmp.lastIndexOf('\n'));e.stack = e.stack.replace(/\snv_/g,' ');e.stack = $gstack(e.stack);e.stack += '\n    at ' + n.substring(2);console.error(e);}
}}}()
f_['./packageComponent/pages/view/scroll-view/scroll-view.wxml']={};
f_['./packageComponent/pages/view/scroll-view/scroll-view.wxml']['refresh'] =nv_require("m_./packageComponent/pages/view/scroll-view/scroll-view.wxml:refresh");
function np_0(){var nv_module={nv_exports:{}};nv_module.nv_exports = ({nv_onPulling:(function (nv_evt,nv_instance){var nv_p = Math.nv_min(nv_evt.nv_detail.nv_dy / 80,1);nv_console.nv_log(nv_p);var nv_view = nv_instance.nv_selectComponent('.refresh-container');nv_view.nv_setStyle(({nv_opacity:nv_p,nv_transform:"scale(" + nv_p + ")",}))}),});return nv_module.nv_exports;}

var x=['./miniprogram_npm/miniprogram-barrage/index.wxml','./miniprogram_npm/miniprogram-recycle-view/recycle-item.wxml','./miniprogram_npm/miniprogram-recycle-view/recycle-view.wxml','./miniprogram_npm/wxml-to-canvas/index.wxml','./packageComponent/pages/canvas/canvas-2d/canvas-2d.wxml','../../../common/head.wxml','../../../common/foot.wxml','./packageComponent/pages/canvas/webgl/webgl.wxml','./packageComponent/pages/content/icon/icon.wxml','./packageComponent/pages/content/progress/progress.wxml','./packageComponent/pages/content/rich-text/rich-text.wxml','./packageComponent/pages/content/text/text.wxml','./packageComponent/pages/form/button/button.wxml','./packageComponent/pages/form/checkbox/checkbox.wxml','./packageComponent/pages/form/editor/editor.wxml','./packageComponent/pages/form/form/form.wxml','./packageComponent/pages/form/input/input.wxml','./packageComponent/pages/form/label/label.wxml','./packageComponent/pages/form/picker-view/picker-view.wxml','./packageComponent/pages/form/picker/picker.wxml','./packageComponent/pages/form/radio/radio.wxml','./packageComponent/pages/form/slider/slider.wxml','./packageComponent/pages/form/switch/switch.wxml','./packageComponent/pages/form/textarea/textarea.wxml','./packageComponent/pages/map/map/map.wxml','./packageComponent/pages/media/camera/camera.wxml','./packageComponent/pages/media/image/image.wxml','./packageComponent/pages/media/live-player/live-player.wxml','./packageComponent/pages/media/live-pusher/live-pusher.wxml','./packageComponent/pages/media/video/video.wxml','./packageComponent/pages/nav/navigator/navigator.wxml','./packageComponent/pages/obstacle-free/aria-component/aria-component.wxml','./packageComponent/pages/open/ad/ad.wxml','./packageComponent/pages/open/open-data/open-data.wxml','./packageComponent/pages/open/web-view/web-view.wxml','./packageComponent/pages/view/cover-view/cover-view.wxml','./packageComponent/pages/view/movable-view/movable-view.wxml','./packageComponent/pages/view/scroll-view/scroll-view.wxml','./packageComponent/pages/view/swiper/swiper.wxml','./packageComponent/pages/view/view/view.wxml','./page/API/components/set-tab-bar/set-tab-bar.wxml','./page/API/index.wxml','./page/cloud/index.wxml','./page/common/foot.wxml','./page/common/head.wxml','./page/component/index.wxml','./page/extend/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$7061636b616765436f6d706f6e656e742f_1()
var oB=_v()
_(r,oB)
if(_oz(z,0,e,s,gg)){oB.wxVkey=1
cs.push("./miniprogram_npm/miniprogram-barrage/index.wxml:view:1:1")
cs.push("./miniprogram_npm/miniprogram-barrage/index.wxml:view:1:1")
var xC=_mz(z,'view',['class',1,'style',1],[],e,s,gg)
cs.push("./miniprogram_npm/miniprogram-barrage/index.wxml:canvas:2:4")
var oD=_mz(z,'canvas',['id',3,'style',1,'type',2],[],e,s,gg)
cs.pop()
_(xC,oD)
cs.pop()
_(oB,xC)
cs.pop()
}
else{oB.wxVkey=2
cs.push("./miniprogram_npm/miniprogram-barrage/index.wxml:view:5:2")
cs.push("./miniprogram_npm/miniprogram-barrage/index.wxml:view:5:2")
var fE=_mz(z,'view',['class',6,'style',1],[],e,s,gg)
var cF=_v()
_(fE,cF)
cs.push("./miniprogram_npm/miniprogram-barrage/index.wxml:block:6:4")
var hG=function(cI,oH,oJ,gg){
cs.push("./miniprogram_npm/miniprogram-barrage/index.wxml:block:6:4")
cs.push("./miniprogram_npm/miniprogram-barrage/index.wxml:view:7:6")
var aL=_mz(z,'view',['class',12,'style',1],[],cI,oH,gg)
cs.push("./miniprogram_npm/miniprogram-barrage/index.wxml:view:8:8")
var tM=_mz(z,'view',['class',14,'hidden',1],[],cI,oH,gg)
var eN=_oz(z,16,cI,oH,gg)
_(tM,eN)
cs.pop()
_(aL,tM)
var bO=_v()
_(aL,bO)
cs.push("./miniprogram_npm/miniprogram-barrage/index.wxml:block:9:8")
var oP=function(oR,xQ,fS,gg){
cs.push("./miniprogram_npm/miniprogram-barrage/index.wxml:block:9:8")
cs.push("./miniprogram_npm/miniprogram-barrage/index.wxml:view:10:10")
var hU=_mz(z,'view',['bindanimationend',21,'bindtap',1,'class',2,'data-bulletid',3,'data-tunnelid',4,'style',5],[],oR,xQ,gg)
var oV=_v()
_(hU,oV)
if(_oz(z,27,oR,xQ,gg)){oV.wxVkey=1
cs.push("./miniprogram_npm/miniprogram-barrage/index.wxml:image:18:12")
cs.push("./miniprogram_npm/miniprogram-barrage/index.wxml:image:18:12")
var oX=_mz(z,'image',['class',28,'mode',1,'src',2,'style',3],[],oR,xQ,gg)
cs.pop()
_(oV,oX)
cs.pop()
}
cs.push("./miniprogram_npm/miniprogram-barrage/index.wxml:view:25:12")
var lY=_mz(z,'view',['class',32,'style',1],[],oR,xQ,gg)
cs.push("./miniprogram_npm/miniprogram-barrage/index.wxml:text:26:14")
var aZ=_n('text')
var t1=_oz(z,34,oR,xQ,gg)
_(aZ,t1)
cs.pop()
_(lY,aZ)
cs.pop()
_(hU,lY)
var cW=_v()
_(hU,cW)
if(_oz(z,35,oR,xQ,gg)){cW.wxVkey=1
cs.push("./miniprogram_npm/miniprogram-barrage/index.wxml:image:28:12")
cs.push("./miniprogram_npm/miniprogram-barrage/index.wxml:image:28:12")
var e2=_mz(z,'image',['class',36,'mode',1,'src',2,'style',3],[],oR,xQ,gg)
cs.pop()
_(cW,e2)
cs.pop()
}
oV.wxXCkey=1
cW.wxXCkey=1
cs.pop()
_(fS,hU)
cs.pop()
return fS
}
bO.wxXCkey=2
_2z(z,19,oP,cI,oH,gg,bO,'bullet','bulletId','bulletId')
cs.pop()
cs.pop()
_(oJ,aL)
cs.pop()
return oJ
}
cF.wxXCkey=2
_2z(z,10,hG,e,s,gg,cF,'tunnel','tunnelId','tunnelId')
cs.pop()
cs.pop()
_(oB,fE)
cs.pop()
}
oB.wxXCkey=1
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
d_[x[1]]={}
var m1=function(e,s,r,gg){
var z=gz$7061636b616765436f6d706f6e656e742f_2()
cs.push("./miniprogram_npm/miniprogram-recycle-view/recycle-item.wxml:view:2:2")
var o4=_n('view')
_rz(z,o4,'class',0,e,s,gg)
cs.push("./miniprogram_npm/miniprogram-recycle-view/recycle-item.wxml:slot:3:4")
var x5=_n('slot')
cs.pop()
_(o4,x5)
cs.pop()
_(r,o4)
return r
}
e_[x[1]]={f:m1,j:[],i:[],ti:[],ic:[]}
d_[x[2]]={}
var m2=function(e,s,r,gg){
var z=gz$7061636b616765436f6d706f6e656e742f_3()
cs.push("./miniprogram_npm/miniprogram-recycle-view/recycle-view.wxml:view:2:2")
var f7=_mz(z,'view',['bindtouchstart',0,'class',1,'id',1,'style',2],[],e,s,gg)
cs.push("./miniprogram_npm/miniprogram-recycle-view/recycle-view.wxml:scroll-view:3:4")
var c8=_mz(z,'scroll-view',['scrollAnchoring',-1,'bindscroll',4,'bindscrolltolower',1,'bindscrolltoupper',2,'class',3,'enableBackToTop',4,'lowerThreshold',5,'scrollIntoView',6,'scrollTop',7,'scrollWithAnimation',8,'scrollX',9,'scrollY',10,'style',11,'throttle',12,'upperThreshold',13],[],e,s,gg)
cs.push("./miniprogram_npm/miniprogram-recycle-view/recycle-view.wxml:view:4:6")
var h9=_n('view')
_rz(z,h9,'style',18,e,s,gg)
cs.push("./miniprogram_npm/miniprogram-recycle-view/recycle-view.wxml:slot:5:8")
var o0=_n('slot')
_rz(z,o0,'name',19,e,s,gg)
cs.pop()
_(h9,o0)
cs.pop()
_(c8,h9)
cs.push("./miniprogram_npm/miniprogram-recycle-view/recycle-view.wxml:view:7:6")
var cAB=_mz(z,'view',['class',20,'style',1],[],e,s,gg)
cs.push("./miniprogram_npm/miniprogram-recycle-view/recycle-view.wxml:slot:8:8")
var oBB=_n('slot')
_rz(z,oBB,'name',22,e,s,gg)
cs.pop()
_(cAB,oBB)
cs.pop()
_(c8,cAB)
cs.push("./miniprogram_npm/miniprogram-recycle-view/recycle-view.wxml:view:10:6")
var lCB=_n('view')
_rz(z,lCB,'style',23,e,s,gg)
cs.push("./miniprogram_npm/miniprogram-recycle-view/recycle-view.wxml:view:12:8")
var aDB=_n('view')
_rz(z,aDB,'style',24,e,s,gg)
cs.push("./miniprogram_npm/miniprogram-recycle-view/recycle-view.wxml:slot:13:10")
var tEB=_n('slot')
cs.pop()
_(aDB,tEB)
cs.pop()
_(lCB,aDB)
cs.pop()
_(c8,lCB)
cs.push("./miniprogram_npm/miniprogram-recycle-view/recycle-view.wxml:view:17:6")
var eFB=_mz(z,'view',['class',25,'style',1],[],e,s,gg)
cs.push("./miniprogram_npm/miniprogram-recycle-view/recycle-view.wxml:slot:18:8")
var bGB=_n('slot')
_rz(z,bGB,'name',27,e,s,gg)
cs.pop()
_(eFB,bGB)
cs.pop()
_(c8,eFB)
cs.pop()
_(f7,c8)
cs.pop()
_(r,f7)
return r
}
e_[x[2]]={f:m2,j:[],i:[],ti:[],ic:[]}
d_[x[3]]={}
var m3=function(e,s,r,gg){
var z=gz$7061636b616765436f6d706f6e656e742f_4()
var xIB=_v()
_(r,xIB)
if(_oz(z,0,e,s,gg)){xIB.wxVkey=1
cs.push("./miniprogram_npm/wxml-to-canvas/index.wxml:canvas:1:1")
cs.push("./miniprogram_npm/wxml-to-canvas/index.wxml:canvas:1:1")
var oJB=_mz(z,'canvas',['id',1,'style',1,'type',2],[],e,s,gg)
cs.pop()
_(xIB,oJB)
cs.pop()
}
else{xIB.wxVkey=2
cs.push("./miniprogram_npm/wxml-to-canvas/index.wxml:canvas:2:2")
cs.push("./miniprogram_npm/wxml-to-canvas/index.wxml:canvas:2:2")
var fKB=_mz(z,'canvas',['canvasId',4,'style',1],[],e,s,gg)
cs.pop()
_(xIB,fKB)
cs.pop()
}
xIB.wxXCkey=1
return r
}
e_[x[3]]={f:m3,j:[],i:[],ti:[],ic:[]}
d_[x[4]]={}
var m4=function(e,s,r,gg){
var z=gz$7061636b616765436f6d706f6e656e742f_5()
var hMB=e_[x[4]].i
_ai(hMB,x[5],e_,x[4],1,1)
_ai(hMB,x[6],e_,x[4],2,2)
cs.push("./packageComponent/pages/canvas/canvas-2d/canvas-2d.wxml:view:4:2")
var oNB=_mz(z,'view',['class',0,'data-weui-theme',1],[],e,s,gg)
var cOB=_v()
_(oNB,cOB)
cs.push("./packageComponent/pages/canvas/canvas-2d/canvas-2d.wxml:template:5:4")
var oPB=_oz(z,3,e,s,gg)
var lQB=_gd(x[4],oPB,e_,d_)
if(lQB){
var aRB=_1z(z,2,e,s,gg) || {}
var cur_globalf=gg.f
cOB.wxXCkey=3
lQB(aRB,aRB,cOB,gg)
gg.f=cur_globalf
}
else _w(oPB,x[4],5,16)
cs.pop()
cs.push("./packageComponent/pages/canvas/canvas-2d/canvas-2d.wxml:view:7:4")
var tSB=_n('view')
_rz(z,tSB,'class',4,e,s,gg)
var eTB=_v()
_(tSB,eTB)
if(_oz(z,5,e,s,gg)){eTB.wxVkey=1
cs.push("./packageComponent/pages/canvas/canvas-2d/canvas-2d.wxml:block:8:6")
cs.push("./packageComponent/pages/canvas/canvas-2d/canvas-2d.wxml:view:9:8")
var bUB=_n('view')
_rz(z,bUB,'class',6,e,s,gg)
cs.push("./packageComponent/pages/canvas/canvas-2d/canvas-2d.wxml:view:10:10")
var oVB=_n('view')
_rz(z,oVB,'class',7,e,s,gg)
cs.push("./packageComponent/pages/canvas/canvas-2d/canvas-2d.wxml:view:11:12")
var xWB=_n('view')
_rz(z,xWB,'class',8,e,s,gg)
cs.push("./packageComponent/pages/canvas/canvas-2d/canvas-2d.wxml:canvas:12:14")
var oXB=_mz(z,'canvas',['class',9,'id',1,'type',2],[],e,s,gg)
cs.pop()
_(xWB,oXB)
cs.pop()
_(oVB,xWB)
cs.pop()
_(bUB,oVB)
cs.pop()
_(eTB,bUB)
cs.pop()
}
else{eTB.wxVkey=2
cs.push("./packageComponent/pages/canvas/canvas-2d/canvas-2d.wxml:view:17:6")
cs.push("./packageComponent/pages/canvas/canvas-2d/canvas-2d.wxml:view:17:6")
var fYB=_n('view')
_rz(z,fYB,'style',12,e,s,gg)
var cZB=_oz(z,13,e,s,gg)
_(fYB,cZB)
cs.pop()
_(eTB,fYB)
cs.pop()
}
eTB.wxXCkey=1
cs.pop()
_(oNB,tSB)
var h1B=_v()
_(oNB,h1B)
cs.push("./packageComponent/pages/canvas/canvas-2d/canvas-2d.wxml:template:22:4")
var o2B=_oz(z,14,e,s,gg)
var c3B=_gd(x[4],o2B,e_,d_)
if(c3B){
var o4B={}
var cur_globalf=gg.f
h1B.wxXCkey=3
c3B(o4B,o4B,h1B,gg)
gg.f=cur_globalf
}
else _w(o2B,x[4],22,16)
cs.pop()
cs.pop()
_(r,oNB)
hMB.pop()
hMB.pop()
return r
}
e_[x[4]]={f:m4,j:[],i:[],ti:[x[5],x[6]],ic:[]}
d_[x[7]]={}
var m5=function(e,s,r,gg){
var z=gz$7061636b616765436f6d706f6e656e742f_6()
var a6B=e_[x[7]].i
_ai(a6B,x[5],e_,x[7],1,1)
_ai(a6B,x[6],e_,x[7],2,2)
cs.push("./packageComponent/pages/canvas/webgl/webgl.wxml:view:4:2")
var t7B=_mz(z,'view',['class',0,'data-weui-theme',1],[],e,s,gg)
var e8B=_v()
_(t7B,e8B)
cs.push("./packageComponent/pages/canvas/webgl/webgl.wxml:template:5:4")
var b9B=_oz(z,3,e,s,gg)
var o0B=_gd(x[7],b9B,e_,d_)
if(o0B){
var xAC=_1z(z,2,e,s,gg) || {}
var cur_globalf=gg.f
e8B.wxXCkey=3
o0B(xAC,xAC,e8B,gg)
gg.f=cur_globalf
}
else _w(b9B,x[7],5,16)
cs.pop()
cs.push("./packageComponent/pages/canvas/webgl/webgl.wxml:view:7:4")
var oBC=_n('view')
_rz(z,oBC,'class',4,e,s,gg)
var fCC=_v()
_(oBC,fCC)
if(_oz(z,5,e,s,gg)){fCC.wxVkey=1
cs.push("./packageComponent/pages/canvas/webgl/webgl.wxml:block:8:6")
cs.push("./packageComponent/pages/canvas/webgl/webgl.wxml:view:9:8")
var cDC=_n('view')
_rz(z,cDC,'class',6,e,s,gg)
cs.push("./packageComponent/pages/canvas/webgl/webgl.wxml:view:10:10")
var hEC=_n('view')
_rz(z,hEC,'class',7,e,s,gg)
cs.push("./packageComponent/pages/canvas/webgl/webgl.wxml:canvas:11:12")
var oFC=_mz(z,'canvas',['class',8,'id',1,'type',2],[],e,s,gg)
cs.pop()
_(hEC,oFC)
cs.pop()
_(cDC,hEC)
cs.pop()
_(fCC,cDC)
cs.pop()
}
else{fCC.wxVkey=2
cs.push("./packageComponent/pages/canvas/webgl/webgl.wxml:view:15:6")
cs.push("./packageComponent/pages/canvas/webgl/webgl.wxml:view:15:6")
var cGC=_n('view')
_rz(z,cGC,'style',11,e,s,gg)
var oHC=_oz(z,12,e,s,gg)
_(cGC,oHC)
cs.pop()
_(fCC,cGC)
cs.pop()
}
fCC.wxXCkey=1
cs.pop()
_(t7B,oBC)
var lIC=_v()
_(t7B,lIC)
cs.push("./packageComponent/pages/canvas/webgl/webgl.wxml:template:20:4")
var aJC=_oz(z,13,e,s,gg)
var tKC=_gd(x[7],aJC,e_,d_)
if(tKC){
var eLC={}
var cur_globalf=gg.f
lIC.wxXCkey=3
tKC(eLC,eLC,lIC,gg)
gg.f=cur_globalf
}
else _w(aJC,x[7],20,16)
cs.pop()
cs.pop()
_(r,t7B)
a6B.pop()
a6B.pop()
return r
}
e_[x[7]]={f:m5,j:[],i:[],ti:[x[5],x[6]],ic:[]}
d_[x[8]]={}
var m6=function(e,s,r,gg){
var z=gz$7061636b616765436f6d706f6e656e742f_7()
var oNC=e_[x[8]].i
_ai(oNC,x[5],e_,x[8],1,1)
_ai(oNC,x[6],e_,x[8],2,2)
cs.push("./packageComponent/pages/content/icon/icon.wxml:view:4:2")
var xOC=_mz(z,'view',['class',0,'data-weui-theme',1],[],e,s,gg)
var oPC=_v()
_(xOC,oPC)
cs.push("./packageComponent/pages/content/icon/icon.wxml:template:5:4")
var fQC=_oz(z,3,e,s,gg)
var cRC=_gd(x[8],fQC,e_,d_)
if(cRC){
var hSC=_1z(z,2,e,s,gg) || {}
var cur_globalf=gg.f
oPC.wxXCkey=3
cRC(hSC,hSC,oPC,gg)
gg.f=cur_globalf
}
else _w(fQC,x[8],5,16)
cs.pop()
cs.push("./packageComponent/pages/content/icon/icon.wxml:view:7:4")
var oTC=_n('view')
_rz(z,oTC,'class',4,e,s,gg)
cs.push("./packageComponent/pages/content/icon/icon.wxml:icon:8:6")
var cUC=_mz(z,'icon',['class',5,'size',1,'type',2],[],e,s,gg)
cs.pop()
_(oTC,cUC)
cs.push("./packageComponent/pages/content/icon/icon.wxml:view:9:6")
var oVC=_n('view')
_rz(z,oVC,'class',8,e,s,gg)
cs.push("./packageComponent/pages/content/icon/icon.wxml:view:10:8")
var lWC=_n('view')
_rz(z,lWC,'class',9,e,s,gg)
var aXC=_oz(z,10,e,s,gg)
_(lWC,aXC)
cs.pop()
_(oVC,lWC)
cs.push("./packageComponent/pages/content/icon/icon.wxml:view:11:8")
var tYC=_n('view')
_rz(z,tYC,'class',11,e,s,gg)
var eZC=_oz(z,12,e,s,gg)
_(tYC,eZC)
cs.pop()
_(oVC,tYC)
cs.pop()
_(oTC,oVC)
cs.pop()
_(xOC,oTC)
cs.push("./packageComponent/pages/content/icon/icon.wxml:view:14:4")
var b1C=_n('view')
_rz(z,b1C,'class',13,e,s,gg)
cs.push("./packageComponent/pages/content/icon/icon.wxml:icon:15:6")
var o2C=_mz(z,'icon',['class',14,'size',1,'type',2],[],e,s,gg)
cs.pop()
_(b1C,o2C)
cs.push("./packageComponent/pages/content/icon/icon.wxml:view:16:6")
var x3C=_n('view')
_rz(z,x3C,'class',17,e,s,gg)
cs.push("./packageComponent/pages/content/icon/icon.wxml:view:17:8")
var o4C=_n('view')
_rz(z,o4C,'class',18,e,s,gg)
var f5C=_oz(z,19,e,s,gg)
_(o4C,f5C)
cs.pop()
_(x3C,o4C)
cs.push("./packageComponent/pages/content/icon/icon.wxml:view:18:8")
var c6C=_n('view')
_rz(z,c6C,'class',20,e,s,gg)
var h7C=_oz(z,21,e,s,gg)
_(c6C,h7C)
cs.pop()
_(x3C,c6C)
cs.pop()
_(b1C,x3C)
cs.pop()
_(xOC,b1C)
cs.push("./packageComponent/pages/content/icon/icon.wxml:view:21:4")
var o8C=_n('view')
_rz(z,o8C,'class',22,e,s,gg)
cs.push("./packageComponent/pages/content/icon/icon.wxml:icon:22:6")
var c9C=_mz(z,'icon',['class',23,'color',1,'size',2,'type',3],[],e,s,gg)
cs.pop()
_(o8C,c9C)
cs.push("./packageComponent/pages/content/icon/icon.wxml:view:23:6")
var o0C=_n('view')
_rz(z,o0C,'class',27,e,s,gg)
cs.push("./packageComponent/pages/content/icon/icon.wxml:view:24:8")
var lAD=_n('view')
_rz(z,lAD,'class',28,e,s,gg)
var aBD=_oz(z,29,e,s,gg)
_(lAD,aBD)
cs.pop()
_(o0C,lAD)
cs.push("./packageComponent/pages/content/icon/icon.wxml:view:25:8")
var tCD=_n('view')
_rz(z,tCD,'class',30,e,s,gg)
var eDD=_oz(z,31,e,s,gg)
_(tCD,eDD)
cs.pop()
_(o0C,tCD)
cs.pop()
_(o8C,o0C)
cs.pop()
_(xOC,o8C)
cs.push("./packageComponent/pages/content/icon/icon.wxml:view:28:4")
var bED=_n('view')
_rz(z,bED,'class',32,e,s,gg)
cs.push("./packageComponent/pages/content/icon/icon.wxml:icon:29:6")
var oFD=_mz(z,'icon',['class',33,'size',1,'type',2],[],e,s,gg)
cs.pop()
_(bED,oFD)
cs.push("./packageComponent/pages/content/icon/icon.wxml:view:30:6")
var xGD=_n('view')
_rz(z,xGD,'class',36,e,s,gg)
cs.push("./packageComponent/pages/content/icon/icon.wxml:view:31:8")
var oHD=_n('view')
_rz(z,oHD,'class',37,e,s,gg)
var fID=_oz(z,38,e,s,gg)
_(oHD,fID)
cs.pop()
_(xGD,oHD)
cs.push("./packageComponent/pages/content/icon/icon.wxml:view:32:8")
var cJD=_n('view')
_rz(z,cJD,'class',39,e,s,gg)
var hKD=_oz(z,40,e,s,gg)
_(cJD,hKD)
cs.pop()
_(xGD,cJD)
cs.pop()
_(bED,xGD)
cs.pop()
_(xOC,bED)
cs.push("./packageComponent/pages/content/icon/icon.wxml:view:35:4")
var oLD=_n('view')
_rz(z,oLD,'class',41,e,s,gg)
cs.push("./packageComponent/pages/content/icon/icon.wxml:icon:36:6")
var cMD=_mz(z,'icon',['class',42,'size',1,'type',2],[],e,s,gg)
cs.pop()
_(oLD,cMD)
cs.push("./packageComponent/pages/content/icon/icon.wxml:view:37:6")
var oND=_n('view')
_rz(z,oND,'class',45,e,s,gg)
cs.push("./packageComponent/pages/content/icon/icon.wxml:view:38:8")
var lOD=_n('view')
_rz(z,lOD,'class',46,e,s,gg)
var aPD=_oz(z,47,e,s,gg)
_(lOD,aPD)
cs.pop()
_(oND,lOD)
cs.push("./packageComponent/pages/content/icon/icon.wxml:view:39:8")
var tQD=_n('view')
_rz(z,tQD,'class',48,e,s,gg)
var eRD=_oz(z,49,e,s,gg)
_(tQD,eRD)
cs.pop()
_(oND,tQD)
cs.pop()
_(oLD,oND)
cs.pop()
_(xOC,oLD)
cs.push("./packageComponent/pages/content/icon/icon.wxml:view:42:4")
var bSD=_n('view')
_rz(z,bSD,'class',50,e,s,gg)
cs.push("./packageComponent/pages/content/icon/icon.wxml:view:43:6")
var oTD=_n('view')
_rz(z,oTD,'class',51,e,s,gg)
cs.push("./packageComponent/pages/content/icon/icon.wxml:icon:44:8")
var xUD=_mz(z,'icon',['class',52,'size',1,'type',2],[],e,s,gg)
cs.pop()
_(oTD,xUD)
cs.pop()
_(bSD,oTD)
cs.push("./packageComponent/pages/content/icon/icon.wxml:view:46:6")
var oVD=_n('view')
_rz(z,oVD,'class',55,e,s,gg)
cs.push("./packageComponent/pages/content/icon/icon.wxml:view:47:8")
var fWD=_n('view')
_rz(z,fWD,'class',56,e,s,gg)
var cXD=_oz(z,57,e,s,gg)
_(fWD,cXD)
cs.pop()
_(oVD,fWD)
cs.push("./packageComponent/pages/content/icon/icon.wxml:view:48:8")
var hYD=_n('view')
_rz(z,hYD,'class',58,e,s,gg)
var oZD=_oz(z,59,e,s,gg)
_(hYD,oZD)
cs.pop()
_(oVD,hYD)
cs.pop()
_(bSD,oVD)
cs.pop()
_(xOC,bSD)
cs.push("./packageComponent/pages/content/icon/icon.wxml:view:51:4")
var c1D=_n('view')
_rz(z,c1D,'class',60,e,s,gg)
cs.push("./packageComponent/pages/content/icon/icon.wxml:view:52:6")
var o2D=_n('view')
_rz(z,o2D,'class',61,e,s,gg)
cs.push("./packageComponent/pages/content/icon/icon.wxml:icon:53:8")
var l3D=_mz(z,'icon',['class',62,'size',1,'type',2],[],e,s,gg)
cs.pop()
_(o2D,l3D)
cs.pop()
_(c1D,o2D)
cs.push("./packageComponent/pages/content/icon/icon.wxml:view:55:6")
var a4D=_n('view')
_rz(z,a4D,'class',65,e,s,gg)
cs.push("./packageComponent/pages/content/icon/icon.wxml:view:56:8")
var t5D=_n('view')
_rz(z,t5D,'class',66,e,s,gg)
var e6D=_oz(z,67,e,s,gg)
_(t5D,e6D)
cs.pop()
_(a4D,t5D)
cs.push("./packageComponent/pages/content/icon/icon.wxml:view:57:8")
var b7D=_n('view')
_rz(z,b7D,'class',68,e,s,gg)
var o8D=_oz(z,69,e,s,gg)
_(b7D,o8D)
cs.pop()
_(a4D,b7D)
cs.pop()
_(c1D,a4D)
cs.pop()
_(xOC,c1D)
cs.push("./packageComponent/pages/content/icon/icon.wxml:view:60:4")
var x9D=_n('view')
_rz(z,x9D,'class',70,e,s,gg)
cs.push("./packageComponent/pages/content/icon/icon.wxml:view:61:6")
var o0D=_n('view')
_rz(z,o0D,'class',71,e,s,gg)
cs.push("./packageComponent/pages/content/icon/icon.wxml:icon:62:8")
var fAE=_mz(z,'icon',['class',72,'size',1,'type',2],[],e,s,gg)
cs.pop()
_(o0D,fAE)
cs.pop()
_(x9D,o0D)
cs.push("./packageComponent/pages/content/icon/icon.wxml:view:64:6")
var cBE=_n('view')
_rz(z,cBE,'class',75,e,s,gg)
cs.push("./packageComponent/pages/content/icon/icon.wxml:view:65:8")
var hCE=_n('view')
_rz(z,hCE,'class',76,e,s,gg)
var oDE=_oz(z,77,e,s,gg)
_(hCE,oDE)
cs.pop()
_(cBE,hCE)
cs.push("./packageComponent/pages/content/icon/icon.wxml:view:66:8")
var cEE=_n('view')
_rz(z,cEE,'class',78,e,s,gg)
var oFE=_oz(z,79,e,s,gg)
_(cEE,oFE)
cs.pop()
_(cBE,cEE)
cs.pop()
_(x9D,cBE)
cs.pop()
_(xOC,x9D)
cs.push("./packageComponent/pages/content/icon/icon.wxml:view:69:4")
var lGE=_n('view')
_rz(z,lGE,'class',80,e,s,gg)
cs.push("./packageComponent/pages/content/icon/icon.wxml:view:70:6")
var aHE=_n('view')
_rz(z,aHE,'class',81,e,s,gg)
cs.push("./packageComponent/pages/content/icon/icon.wxml:icon:71:8")
var tIE=_mz(z,'icon',['class',82,'size',1,'type',2],[],e,s,gg)
cs.pop()
_(aHE,tIE)
cs.pop()
_(lGE,aHE)
cs.push("./packageComponent/pages/content/icon/icon.wxml:view:73:6")
var eJE=_n('view')
_rz(z,eJE,'class',85,e,s,gg)
cs.push("./packageComponent/pages/content/icon/icon.wxml:view:74:8")
var bKE=_n('view')
_rz(z,bKE,'class',86,e,s,gg)
var oLE=_oz(z,87,e,s,gg)
_(bKE,oLE)
cs.pop()
_(eJE,bKE)
cs.push("./packageComponent/pages/content/icon/icon.wxml:view:75:8")
var xME=_n('view')
_rz(z,xME,'class',88,e,s,gg)
var oNE=_oz(z,89,e,s,gg)
_(xME,oNE)
cs.pop()
_(eJE,xME)
cs.pop()
_(lGE,eJE)
cs.pop()
_(xOC,lGE)
cs.push("./packageComponent/pages/content/icon/icon.wxml:view:78:4")
var fOE=_n('view')
_rz(z,fOE,'class',90,e,s,gg)
cs.push("./packageComponent/pages/content/icon/icon.wxml:view:79:6")
var cPE=_n('view')
_rz(z,cPE,'class',91,e,s,gg)
cs.push("./packageComponent/pages/content/icon/icon.wxml:icon:80:8")
var hQE=_mz(z,'icon',['class',92,'size',1,'type',2],[],e,s,gg)
cs.pop()
_(cPE,hQE)
cs.pop()
_(fOE,cPE)
cs.push("./packageComponent/pages/content/icon/icon.wxml:view:82:6")
var oRE=_n('view')
_rz(z,oRE,'class',95,e,s,gg)
cs.push("./packageComponent/pages/content/icon/icon.wxml:view:83:8")
var cSE=_n('view')
_rz(z,cSE,'class',96,e,s,gg)
var oTE=_oz(z,97,e,s,gg)
_(cSE,oTE)
cs.pop()
_(oRE,cSE)
cs.push("./packageComponent/pages/content/icon/icon.wxml:view:84:8")
var lUE=_n('view')
_rz(z,lUE,'class',98,e,s,gg)
var aVE=_oz(z,99,e,s,gg)
_(lUE,aVE)
cs.pop()
_(oRE,lUE)
cs.pop()
_(fOE,oRE)
cs.pop()
_(xOC,fOE)
cs.push("./packageComponent/pages/content/icon/icon.wxml:view:87:4")
var tWE=_n('view')
_rz(z,tWE,'class',100,e,s,gg)
cs.push("./packageComponent/pages/content/icon/icon.wxml:view:88:6")
var eXE=_n('view')
_rz(z,eXE,'class',101,e,s,gg)
cs.push("./packageComponent/pages/content/icon/icon.wxml:icon:89:8")
var bYE=_mz(z,'icon',['class',102,'size',1,'type',2],[],e,s,gg)
cs.pop()
_(eXE,bYE)
cs.pop()
_(tWE,eXE)
cs.push("./packageComponent/pages/content/icon/icon.wxml:view:91:6")
var oZE=_n('view')
_rz(z,oZE,'class',105,e,s,gg)
cs.push("./packageComponent/pages/content/icon/icon.wxml:view:92:8")
var x1E=_n('view')
_rz(z,x1E,'class',106,e,s,gg)
var o2E=_oz(z,107,e,s,gg)
_(x1E,o2E)
cs.pop()
_(oZE,x1E)
cs.push("./packageComponent/pages/content/icon/icon.wxml:view:93:8")
var f3E=_n('view')
_rz(z,f3E,'class',108,e,s,gg)
var c4E=_oz(z,109,e,s,gg)
_(f3E,c4E)
cs.pop()
_(oZE,f3E)
cs.pop()
_(tWE,oZE)
cs.pop()
_(xOC,tWE)
cs.push("./packageComponent/pages/content/icon/icon.wxml:view:96:4")
var h5E=_n('view')
_rz(z,h5E,'class',110,e,s,gg)
cs.push("./packageComponent/pages/content/icon/icon.wxml:view:97:6")
var o6E=_n('view')
_rz(z,o6E,'class',111,e,s,gg)
cs.push("./packageComponent/pages/content/icon/icon.wxml:icon:98:8")
var c7E=_mz(z,'icon',['class',112,'size',1,'type',2],[],e,s,gg)
cs.pop()
_(o6E,c7E)
cs.pop()
_(h5E,o6E)
cs.push("./packageComponent/pages/content/icon/icon.wxml:view:100:6")
var o8E=_n('view')
_rz(z,o8E,'class',115,e,s,gg)
cs.push("./packageComponent/pages/content/icon/icon.wxml:view:101:8")
var l9E=_n('view')
_rz(z,l9E,'class',116,e,s,gg)
var a0E=_oz(z,117,e,s,gg)
_(l9E,a0E)
cs.pop()
_(o8E,l9E)
cs.push("./packageComponent/pages/content/icon/icon.wxml:view:102:8")
var tAF=_n('view')
_rz(z,tAF,'class',118,e,s,gg)
var eBF=_oz(z,119,e,s,gg)
_(tAF,eBF)
cs.pop()
_(o8E,tAF)
cs.pop()
_(h5E,o8E)
cs.pop()
_(xOC,h5E)
cs.push("./packageComponent/pages/content/icon/icon.wxml:view:105:4")
var bCF=_n('view')
_rz(z,bCF,'class',120,e,s,gg)
cs.push("./packageComponent/pages/content/icon/icon.wxml:view:106:6")
var oDF=_n('view')
_rz(z,oDF,'class',121,e,s,gg)
cs.push("./packageComponent/pages/content/icon/icon.wxml:icon:107:8")
var xEF=_mz(z,'icon',['class',122,'size',1,'type',2],[],e,s,gg)
cs.pop()
_(oDF,xEF)
cs.pop()
_(bCF,oDF)
cs.push("./packageComponent/pages/content/icon/icon.wxml:view:109:6")
var oFF=_n('view')
_rz(z,oFF,'class',125,e,s,gg)
cs.push("./packageComponent/pages/content/icon/icon.wxml:view:110:8")
var fGF=_n('view')
_rz(z,fGF,'class',126,e,s,gg)
var cHF=_oz(z,127,e,s,gg)
_(fGF,cHF)
cs.pop()
_(oFF,fGF)
cs.push("./packageComponent/pages/content/icon/icon.wxml:view:111:8")
var hIF=_n('view')
_rz(z,hIF,'class',128,e,s,gg)
var oJF=_oz(z,129,e,s,gg)
_(hIF,oJF)
cs.pop()
_(oFF,hIF)
cs.pop()
_(bCF,oFF)
cs.pop()
_(xOC,bCF)
var cKF=_v()
_(xOC,cKF)
cs.push("./packageComponent/pages/content/icon/icon.wxml:template:115:4")
var oLF=_oz(z,130,e,s,gg)
var lMF=_gd(x[8],oLF,e_,d_)
if(lMF){
var aNF={}
var cur_globalf=gg.f
cKF.wxXCkey=3
lMF(aNF,aNF,cKF,gg)
gg.f=cur_globalf
}
else _w(oLF,x[8],115,16)
cs.pop()
cs.pop()
_(r,xOC)
oNC.pop()
oNC.pop()
return r
}
e_[x[8]]={f:m6,j:[],i:[],ti:[x[5],x[6]],ic:[]}
d_[x[9]]={}
var m7=function(e,s,r,gg){
var z=gz$7061636b616765436f6d706f6e656e742f_8()
var ePF=e_[x[9]].i
_ai(ePF,x[5],e_,x[9],1,1)
_ai(ePF,x[6],e_,x[9],2,2)
cs.push("./packageComponent/pages/content/progress/progress.wxml:view:4:2")
var bQF=_mz(z,'view',['class',0,'data-weui-theme',1],[],e,s,gg)
var oRF=_v()
_(bQF,oRF)
cs.push("./packageComponent/pages/content/progress/progress.wxml:template:5:4")
var xSF=_oz(z,3,e,s,gg)
var oTF=_gd(x[9],xSF,e_,d_)
if(oTF){
var fUF=_1z(z,2,e,s,gg) || {}
var cur_globalf=gg.f
oRF.wxXCkey=3
oTF(fUF,fUF,oRF,gg)
gg.f=cur_globalf
}
else _w(xSF,x[9],5,16)
cs.pop()
cs.push("./packageComponent/pages/content/progress/progress.wxml:view:7:4")
var cVF=_n('view')
_rz(z,cVF,'class',4,e,s,gg)
cs.push("./packageComponent/pages/content/progress/progress.wxml:view:8:6")
var hWF=_n('view')
_rz(z,hWF,'class',5,e,s,gg)
cs.push("./packageComponent/pages/content/progress/progress.wxml:view:10:8")
var oXF=_n('view')
_rz(z,oXF,'class',6,e,s,gg)
cs.push("./packageComponent/pages/content/progress/progress.wxml:progress:11:10")
var cYF=_mz(z,'progress',['showInfo',-1,'percent',7,'strokeWidth',1],[],e,s,gg)
cs.pop()
_(oXF,cYF)
cs.pop()
_(hWF,oXF)
cs.push("./packageComponent/pages/content/progress/progress.wxml:view:14:8")
var oZF=_n('view')
_rz(z,oZF,'class',9,e,s,gg)
cs.push("./packageComponent/pages/content/progress/progress.wxml:progress:15:10")
var l1F=_mz(z,'progress',['active',-1,'percent',10,'strokeWidth',1],[],e,s,gg)
cs.pop()
_(oZF,l1F)
cs.push("./packageComponent/pages/content/progress/progress.wxml:icon:16:10")
var a2F=_mz(z,'icon',['class',12,'type',1],[],e,s,gg)
cs.pop()
_(oZF,a2F)
cs.pop()
_(hWF,oZF)
cs.push("./packageComponent/pages/content/progress/progress.wxml:view:19:8")
var t3F=_n('view')
_rz(z,t3F,'class',14,e,s,gg)
cs.push("./packageComponent/pages/content/progress/progress.wxml:progress:20:10")
var e4F=_mz(z,'progress',['active',-1,'percent',15,'strokeWidth',1],[],e,s,gg)
cs.pop()
_(t3F,e4F)
cs.pop()
_(hWF,t3F)
cs.push("./packageComponent/pages/content/progress/progress.wxml:view:23:8")
var b5F=_n('view')
_rz(z,b5F,'class',17,e,s,gg)
cs.push("./packageComponent/pages/content/progress/progress.wxml:progress:24:10")
var o6F=_mz(z,'progress',['active',-1,'color',18,'percent',1,'strokeWidth',2],[],e,s,gg)
cs.pop()
_(b5F,o6F)
cs.pop()
_(hWF,b5F)
cs.pop()
_(cVF,hWF)
cs.pop()
_(bQF,cVF)
var x7F=_v()
_(bQF,x7F)
cs.push("./packageComponent/pages/content/progress/progress.wxml:template:29:4")
var o8F=_oz(z,21,e,s,gg)
var f9F=_gd(x[9],o8F,e_,d_)
if(f9F){
var c0F={}
var cur_globalf=gg.f
x7F.wxXCkey=3
f9F(c0F,c0F,x7F,gg)
gg.f=cur_globalf
}
else _w(o8F,x[9],29,16)
cs.pop()
cs.pop()
_(r,bQF)
ePF.pop()
ePF.pop()
return r
}
e_[x[9]]={f:m7,j:[],i:[],ti:[x[5],x[6]],ic:[]}
d_[x[10]]={}
var m8=function(e,s,r,gg){
var z=gz$7061636b616765436f6d706f6e656e742f_9()
var oBG=e_[x[10]].i
_ai(oBG,x[5],e_,x[10],1,1)
_ai(oBG,x[6],e_,x[10],2,2)
cs.push("./packageComponent/pages/content/rich-text/rich-text.wxml:view:4:2")
var cCG=_mz(z,'view',['class',0,'data-weui-theme',1],[],e,s,gg)
var oDG=_v()
_(cCG,oDG)
cs.push("./packageComponent/pages/content/rich-text/rich-text.wxml:template:5:4")
var lEG=_oz(z,3,e,s,gg)
var aFG=_gd(x[10],lEG,e_,d_)
if(aFG){
var tGG=_1z(z,2,e,s,gg) || {}
var cur_globalf=gg.f
oDG.wxXCkey=3
aFG(tGG,tGG,oDG,gg)
gg.f=cur_globalf
}
else _w(lEG,x[10],5,16)
cs.pop()
cs.push("./packageComponent/pages/content/rich-text/rich-text.wxml:view:7:4")
var eHG=_n('view')
_rz(z,eHG,'class',4,e,s,gg)
cs.push("./packageComponent/pages/content/rich-text/rich-text.wxml:view:8:6")
var bIG=_n('view')
_rz(z,bIG,'class',5,e,s,gg)
cs.push("./packageComponent/pages/content/rich-text/rich-text.wxml:view:9:8")
var oJG=_n('view')
_rz(z,oJG,'class',6,e,s,gg)
var xKG=_oz(z,7,e,s,gg)
_(oJG,xKG)
cs.pop()
_(bIG,oJG)
cs.push("./packageComponent/pages/content/rich-text/rich-text.wxml:view:10:8")
var oLG=_n('view')
_rz(z,oLG,'class',8,e,s,gg)
cs.push("./packageComponent/pages/content/rich-text/rich-text.wxml:scroll-view:11:10")
var cNG=_n('scroll-view')
cNG.attr['scrollY']=true
var hOG=_oz(z,9,e,s,gg)
_(cNG,hOG)
cs.pop()
_(oLG,cNG)
cs.push("./packageComponent/pages/content/rich-text/rich-text.wxml:button:12:10")
var oPG=_mz(z,'button',['bindtap',10,'type',1],[],e,s,gg)
var cQG=_oz(z,12,e,s,gg)
_(oPG,cQG)
cs.pop()
_(oLG,oPG)
var fMG=_v()
_(oLG,fMG)
if(_oz(z,13,e,s,gg)){fMG.wxVkey=1
cs.push("./packageComponent/pages/content/rich-text/rich-text.wxml:block:13:10")
cs.push("./packageComponent/pages/content/rich-text/rich-text.wxml:rich-text:14:12")
var oRG=_n('rich-text')
_rz(z,oRG,'nodes',14,e,s,gg)
cs.pop()
_(fMG,oRG)
cs.pop()
}
fMG.wxXCkey=1
cs.pop()
_(bIG,oLG)
cs.pop()
_(eHG,bIG)
cs.push("./packageComponent/pages/content/rich-text/rich-text.wxml:view:19:6")
var lSG=_n('view')
_rz(z,lSG,'class',15,e,s,gg)
cs.push("./packageComponent/pages/content/rich-text/rich-text.wxml:view:20:8")
var aTG=_n('view')
_rz(z,aTG,'class',16,e,s,gg)
var tUG=_oz(z,17,e,s,gg)
_(aTG,tUG)
cs.pop()
_(lSG,aTG)
cs.push("./packageComponent/pages/content/rich-text/rich-text.wxml:view:21:8")
var eVG=_n('view')
_rz(z,eVG,'class',18,e,s,gg)
cs.push("./packageComponent/pages/content/rich-text/rich-text.wxml:scroll-view:22:10")
var oXG=_n('scroll-view')
oXG.attr['scrollY']=true
var xYG=_oz(z,19,e,s,gg)
_(oXG,xYG)
cs.pop()
_(eVG,oXG)
cs.push("./packageComponent/pages/content/rich-text/rich-text.wxml:button:23:10")
var oZG=_mz(z,'button',['bindtap',20,'type',1],[],e,s,gg)
var f1G=_oz(z,22,e,s,gg)
_(oZG,f1G)
cs.pop()
_(eVG,oZG)
var bWG=_v()
_(eVG,bWG)
if(_oz(z,23,e,s,gg)){bWG.wxVkey=1
cs.push("./packageComponent/pages/content/rich-text/rich-text.wxml:block:24:10")
cs.push("./packageComponent/pages/content/rich-text/rich-text.wxml:rich-text:25:12")
var c2G=_n('rich-text')
_rz(z,c2G,'nodes',24,e,s,gg)
cs.pop()
_(bWG,c2G)
cs.pop()
}
bWG.wxXCkey=1
cs.pop()
_(lSG,eVG)
cs.pop()
_(eHG,lSG)
cs.pop()
_(cCG,eHG)
var h3G=_v()
_(cCG,h3G)
cs.push("./packageComponent/pages/content/rich-text/rich-text.wxml:template:31:4")
var o4G=_oz(z,25,e,s,gg)
var c5G=_gd(x[10],o4G,e_,d_)
if(c5G){
var o6G={}
var cur_globalf=gg.f
h3G.wxXCkey=3
c5G(o6G,o6G,h3G,gg)
gg.f=cur_globalf
}
else _w(o4G,x[10],31,16)
cs.pop()
cs.pop()
_(r,cCG)
oBG.pop()
oBG.pop()
return r
}
e_[x[10]]={f:m8,j:[],i:[],ti:[x[5],x[6]],ic:[]}
d_[x[11]]={}
var m9=function(e,s,r,gg){
var z=gz$7061636b616765436f6d706f6e656e742f_10()
var a8G=e_[x[11]].i
_ai(a8G,x[5],e_,x[11],1,1)
_ai(a8G,x[6],e_,x[11],2,2)
cs.push("./packageComponent/pages/content/text/text.wxml:view:4:2")
var t9G=_mz(z,'view',['class',0,'data-weui-theme',1],[],e,s,gg)
var e0G=_v()
_(t9G,e0G)
cs.push("./packageComponent/pages/content/text/text.wxml:template:5:4")
var bAH=_oz(z,3,e,s,gg)
var oBH=_gd(x[11],bAH,e_,d_)
if(oBH){
var xCH=_1z(z,2,e,s,gg) || {}
var cur_globalf=gg.f
e0G.wxXCkey=3
oBH(xCH,xCH,e0G,gg)
gg.f=cur_globalf
}
else _w(bAH,x[11],5,16)
cs.pop()
cs.push("./packageComponent/pages/content/text/text.wxml:view:7:4")
var oDH=_n('view')
_rz(z,oDH,'class',4,e,s,gg)
cs.push("./packageComponent/pages/content/text/text.wxml:view:8:6")
var fEH=_n('view')
_rz(z,fEH,'class',5,e,s,gg)
cs.push("./packageComponent/pages/content/text/text.wxml:view:9:8")
var cFH=_mz(z,'view',['class',6,'scrollTop',1,'scrollY',2],[],e,s,gg)
cs.push("./packageComponent/pages/content/text/text.wxml:text:10:10")
var hGH=_n('text')
var oHH=_oz(z,9,e,s,gg)
_(hGH,oHH)
cs.pop()
_(cFH,hGH)
cs.pop()
_(fEH,cFH)
cs.push("./packageComponent/pages/content/text/text.wxml:button:12:8")
var cIH=_mz(z,'button',['bindtap',10,'disabled',1],[],e,s,gg)
var oJH=_oz(z,12,e,s,gg)
_(cIH,oJH)
cs.pop()
_(fEH,cIH)
cs.push("./packageComponent/pages/content/text/text.wxml:button:13:8")
var lKH=_mz(z,'button',['bindtap',13,'disabled',1],[],e,s,gg)
var aLH=_oz(z,15,e,s,gg)
_(lKH,aLH)
cs.pop()
_(fEH,lKH)
cs.pop()
_(oDH,fEH)
cs.pop()
_(t9G,oDH)
var tMH=_v()
_(t9G,tMH)
cs.push("./packageComponent/pages/content/text/text.wxml:template:17:4")
var eNH=_oz(z,16,e,s,gg)
var bOH=_gd(x[11],eNH,e_,d_)
if(bOH){
var oPH={}
var cur_globalf=gg.f
tMH.wxXCkey=3
bOH(oPH,oPH,tMH,gg)
gg.f=cur_globalf
}
else _w(eNH,x[11],17,16)
cs.pop()
cs.pop()
_(r,t9G)
a8G.pop()
a8G.pop()
return r
}
e_[x[11]]={f:m9,j:[],i:[],ti:[x[5],x[6]],ic:[]}
d_[x[12]]={}
var m10=function(e,s,r,gg){
var z=gz$7061636b616765436f6d706f6e656e742f_11()
var oRH=e_[x[12]].i
_ai(oRH,x[5],e_,x[12],1,1)
_ai(oRH,x[6],e_,x[12],2,2)
cs.push("./packageComponent/pages/form/button/button.wxml:view:4:2")
var fSH=_mz(z,'view',['class',0,'data-weui-theme',1],[],e,s,gg)
var cTH=_v()
_(fSH,cTH)
cs.push("./packageComponent/pages/form/button/button.wxml:template:5:4")
var hUH=_oz(z,3,e,s,gg)
var oVH=_gd(x[12],hUH,e_,d_)
if(oVH){
var cWH=_1z(z,2,e,s,gg) || {}
var cur_globalf=gg.f
cTH.wxXCkey=3
oVH(cWH,cWH,cTH,gg)
gg.f=cur_globalf
}
else _w(hUH,x[12],5,16)
cs.pop()
cs.push("./packageComponent/pages/form/button/button.wxml:view:7:4")
var oXH=_n('view')
_rz(z,oXH,'class',4,e,s,gg)
cs.push("./packageComponent/pages/form/button/button.wxml:view:8:6")
var lYH=_mz(z,'view',['class',5,'id',1],[],e,s,gg)
cs.push("./packageComponent/pages/form/button/button.wxml:button:9:8")
var t1H=_n('button')
_rz(z,t1H,'type',7,e,s,gg)
var e2H=_oz(z,8,e,s,gg)
_(t1H,e2H)
cs.pop()
_(lYH,t1H)
cs.push("./packageComponent/pages/form/button/button.wxml:button:10:8")
var b3H=_mz(z,'button',['loading',9,'type',1],[],e,s,gg)
var o4H=_oz(z,11,e,s,gg)
_(b3H,o4H)
cs.pop()
_(lYH,b3H)
cs.push("./packageComponent/pages/form/button/button.wxml:button:11:8")
var x5H=_mz(z,'button',['disabled',12,'type',1],[],e,s,gg)
var o6H=_oz(z,14,e,s,gg)
_(x5H,o6H)
cs.pop()
_(lYH,x5H)
cs.push("./packageComponent/pages/form/button/button.wxml:button:13:8")
var f7H=_n('button')
_rz(z,f7H,'type',15,e,s,gg)
var c8H=_oz(z,16,e,s,gg)
_(f7H,c8H)
cs.pop()
_(lYH,f7H)
cs.push("./packageComponent/pages/form/button/button.wxml:button:14:8")
var h9H=_mz(z,'button',['disabled',17,'type',1],[],e,s,gg)
var o0H=_oz(z,19,e,s,gg)
_(h9H,o0H)
cs.pop()
_(lYH,h9H)
cs.push("./packageComponent/pages/form/button/button.wxml:button:16:8")
var cAI=_n('button')
_rz(z,cAI,'type',20,e,s,gg)
var oBI=_oz(z,21,e,s,gg)
_(cAI,oBI)
cs.pop()
_(lYH,cAI)
cs.push("./packageComponent/pages/form/button/button.wxml:button:17:8")
var lCI=_mz(z,'button',['disabled',22,'type',1],[],e,s,gg)
var aDI=_oz(z,24,e,s,gg)
_(lCI,aDI)
cs.pop()
_(lYH,lCI)
cs.push("./packageComponent/pages/form/button/button.wxml:view:19:8")
var tEI=_n('view')
_rz(z,tEI,'class',25,e,s,gg)
cs.push("./packageComponent/pages/form/button/button.wxml:button:20:10")
var eFI=_mz(z,'button',['plain',26,'type',1],[],e,s,gg)
var bGI=_oz(z,28,e,s,gg)
_(eFI,bGI)
cs.pop()
_(tEI,eFI)
cs.push("./packageComponent/pages/form/button/button.wxml:button:21:10")
var oHI=_mz(z,'button',['disabled',29,'plain',1,'type',2],[],e,s,gg)
var xII=_oz(z,32,e,s,gg)
_(oHI,xII)
cs.pop()
_(tEI,oHI)
cs.push("./packageComponent/pages/form/button/button.wxml:button:23:10")
var oJI=_mz(z,'button',['plain',33,'type',1],[],e,s,gg)
var fKI=_oz(z,35,e,s,gg)
_(oJI,fKI)
cs.pop()
_(tEI,oJI)
cs.push("./packageComponent/pages/form/button/button.wxml:button:24:10")
var cLI=_mz(z,'button',['disabled',36,'plain',1,'type',2],[],e,s,gg)
var hMI=_oz(z,39,e,s,gg)
_(cLI,hMI)
cs.pop()
_(tEI,cLI)
cs.push("./packageComponent/pages/form/button/button.wxml:button:26:10")
var oNI=_mz(z,'button',['class',40,'size',1,'type',2],[],e,s,gg)
var cOI=_oz(z,43,e,s,gg)
_(oNI,cOI)
cs.pop()
_(tEI,oNI)
cs.push("./packageComponent/pages/form/button/button.wxml:button:27:10")
var oPI=_mz(z,'button',['class',44,'size',1,'type',2],[],e,s,gg)
var lQI=_oz(z,47,e,s,gg)
_(oPI,lQI)
cs.pop()
_(tEI,oPI)
cs.push("./packageComponent/pages/form/button/button.wxml:button:28:10")
var aRI=_mz(z,'button',['class',48,'size',1,'type',2],[],e,s,gg)
var tSI=_oz(z,51,e,s,gg)
_(aRI,tSI)
cs.pop()
_(tEI,aRI)
cs.pop()
_(lYH,tEI)
cs.push("./packageComponent/pages/form/button/button.wxml:button:30:8")
var eTI=_mz(z,'button',['bindcontact',52,'openType',1,'sendMessageTitle',2,'showMessageCard',3,'type',4],[],e,s,gg)
var bUI=_oz(z,57,e,s,gg)
_(eTI,bUI)
cs.pop()
_(lYH,eTI)
cs.push("./packageComponent/pages/form/button/button.wxml:button:31:8")
var oVI=_mz(z,'button',['openType',58,'type',1],[],e,s,gg)
var xWI=_oz(z,60,e,s,gg)
_(oVI,xWI)
cs.pop()
_(lYH,oVI)
cs.push("./packageComponent/pages/form/button/button.wxml:button:32:8")
var oXI=_mz(z,'button',['bindgetphonenumber',61,'openType',1,'type',2],[],e,s,gg)
var fYI=_oz(z,64,e,s,gg)
_(oXI,fYI)
cs.pop()
_(lYH,oXI)
var aZH=_v()
_(lYH,aZH)
if(_oz(z,65,e,s,gg)){aZH.wxVkey=1
cs.push("./packageComponent/pages/form/button/button.wxml:button:33:8")
cs.push("./packageComponent/pages/form/button/button.wxml:button:33:8")
var cZI=_mz(z,'button',['bindtap',66,'lang',1,'type',2],[],e,s,gg)
var h1I=_oz(z,69,e,s,gg)
_(cZI,h1I)
cs.pop()
_(aZH,cZI)
cs.pop()
}
else{aZH.wxVkey=2
cs.push("./packageComponent/pages/form/button/button.wxml:button:34:8")
cs.push("./packageComponent/pages/form/button/button.wxml:button:34:8")
var o2I=_mz(z,'button',['bindgetuserinfo',70,'lang',1,'openType',2,'type',3],[],e,s,gg)
var c3I=_oz(z,74,e,s,gg)
_(o2I,c3I)
cs.pop()
_(aZH,o2I)
cs.pop()
}
cs.push("./packageComponent/pages/form/button/button.wxml:button:35:8")
var o4I=_mz(z,'button',['bindopensetting',75,'openType',1,'type',2],[],e,s,gg)
var l5I=_oz(z,78,e,s,gg)
_(o4I,l5I)
cs.pop()
_(lYH,o4I)
cs.push("./packageComponent/pages/form/button/button.wxml:button:36:8")
var a6I=_mz(z,'button',['openType',79,'type',1],[],e,s,gg)
var t7I=_oz(z,81,e,s,gg)
_(a6I,t7I)
cs.pop()
_(lYH,a6I)
aZH.wxXCkey=1
cs.pop()
_(oXH,lYH)
cs.pop()
_(fSH,oXH)
var e8I=_v()
_(fSH,e8I)
cs.push("./packageComponent/pages/form/button/button.wxml:template:40:4")
var b9I=_oz(z,82,e,s,gg)
var o0I=_gd(x[12],b9I,e_,d_)
if(o0I){
var xAJ={}
var cur_globalf=gg.f
e8I.wxXCkey=3
o0I(xAJ,xAJ,e8I,gg)
gg.f=cur_globalf
}
else _w(b9I,x[12],40,16)
cs.pop()
cs.pop()
_(r,fSH)
oRH.pop()
oRH.pop()
return r
}
e_[x[12]]={f:m10,j:[],i:[],ti:[x[5],x[6]],ic:[]}
d_[x[13]]={}
var m11=function(e,s,r,gg){
var z=gz$7061636b616765436f6d706f6e656e742f_12()
var fCJ=e_[x[13]].i
_ai(fCJ,x[5],e_,x[13],1,1)
_ai(fCJ,x[6],e_,x[13],2,2)
cs.push("./packageComponent/pages/form/checkbox/checkbox.wxml:view:4:2")
var cDJ=_mz(z,'view',['class',0,'data-weui-theme',1],[],e,s,gg)
var hEJ=_v()
_(cDJ,hEJ)
cs.push("./packageComponent/pages/form/checkbox/checkbox.wxml:template:5:4")
var oFJ=_oz(z,3,e,s,gg)
var cGJ=_gd(x[13],oFJ,e_,d_)
if(cGJ){
var oHJ=_1z(z,2,e,s,gg) || {}
var cur_globalf=gg.f
hEJ.wxXCkey=3
cGJ(oHJ,oHJ,hEJ,gg)
gg.f=cur_globalf
}
else _w(oFJ,x[13],5,16)
cs.pop()
cs.push("./packageComponent/pages/form/checkbox/checkbox.wxml:view:7:4")
var lIJ=_n('view')
_rz(z,lIJ,'class',4,e,s,gg)
cs.push("./packageComponent/pages/form/checkbox/checkbox.wxml:view:8:6")
var aJJ=_n('view')
_rz(z,aJJ,'class',5,e,s,gg)
cs.push("./packageComponent/pages/form/checkbox/checkbox.wxml:view:9:8")
var tKJ=_n('view')
_rz(z,tKJ,'class',6,e,s,gg)
var eLJ=_oz(z,7,e,s,gg)
_(tKJ,eLJ)
cs.pop()
_(aJJ,tKJ)
cs.push("./packageComponent/pages/form/checkbox/checkbox.wxml:label:10:8")
var bMJ=_n('label')
_rz(z,bMJ,'class',8,e,s,gg)
cs.push("./packageComponent/pages/form/checkbox/checkbox.wxml:checkbox:11:10")
var oNJ=_mz(z,'checkbox',['checked',9,'value',1],[],e,s,gg)
cs.pop()
_(bMJ,oNJ)
var xOJ=_oz(z,11,e,s,gg)
_(bMJ,xOJ)
cs.pop()
_(aJJ,bMJ)
cs.push("./packageComponent/pages/form/checkbox/checkbox.wxml:label:13:8")
var oPJ=_n('label')
_rz(z,oPJ,'class',12,e,s,gg)
cs.push("./packageComponent/pages/form/checkbox/checkbox.wxml:checkbox:14:10")
var fQJ=_n('checkbox')
_rz(z,fQJ,'value',13,e,s,gg)
cs.pop()
_(oPJ,fQJ)
var cRJ=_oz(z,14,e,s,gg)
_(oPJ,cRJ)
cs.pop()
_(aJJ,oPJ)
cs.pop()
_(lIJ,aJJ)
cs.push("./packageComponent/pages/form/checkbox/checkbox.wxml:view:18:6")
var hSJ=_n('view')
_rz(z,hSJ,'class',15,e,s,gg)
cs.push("./packageComponent/pages/form/checkbox/checkbox.wxml:view:19:8")
var oTJ=_n('view')
_rz(z,oTJ,'class',16,e,s,gg)
var cUJ=_oz(z,17,e,s,gg)
_(oTJ,cUJ)
cs.pop()
_(hSJ,oTJ)
cs.push("./packageComponent/pages/form/checkbox/checkbox.wxml:view:20:8")
var oVJ=_n('view')
_rz(z,oVJ,'class',18,e,s,gg)
cs.push("./packageComponent/pages/form/checkbox/checkbox.wxml:checkbox-group:21:10")
var lWJ=_n('checkbox-group')
_rz(z,lWJ,'bindchange',19,e,s,gg)
var aXJ=_v()
_(lWJ,aXJ)
cs.push("./packageComponent/pages/form/checkbox/checkbox.wxml:label:22:12")
var tYJ=function(b1J,eZJ,o2J,gg){
cs.push("./packageComponent/pages/form/checkbox/checkbox.wxml:label:22:12")
var o4J=_n('label')
_rz(z,o4J,'class',22,b1J,eZJ,gg)
cs.push("./packageComponent/pages/form/checkbox/checkbox.wxml:view:23:14")
var f5J=_n('view')
_rz(z,f5J,'class',23,b1J,eZJ,gg)
cs.push("./packageComponent/pages/form/checkbox/checkbox.wxml:checkbox:24:16")
var c6J=_mz(z,'checkbox',['checked',24,'value',1],[],b1J,eZJ,gg)
cs.pop()
_(f5J,c6J)
cs.pop()
_(o4J,f5J)
cs.push("./packageComponent/pages/form/checkbox/checkbox.wxml:view:26:14")
var h7J=_n('view')
_rz(z,h7J,'class',26,b1J,eZJ,gg)
var o8J=_oz(z,27,b1J,eZJ,gg)
_(h7J,o8J)
cs.pop()
_(o4J,h7J)
cs.pop()
_(o2J,o4J)
return o2J
}
_wp('./packageComponent/pages/form/checkbox/checkbox.wxml:label:22:12: wx:key="{{item.value}}" does not look like a valid key name (did you mean wx:key="value" ?)')
aXJ.wxXCkey=2
_2z(z,20,tYJ,e,s,gg,aXJ,'item','index','{{item.value}}')
cs.pop()
cs.pop()
_(oVJ,lWJ)
cs.pop()
_(hSJ,oVJ)
cs.pop()
_(lIJ,hSJ)
cs.pop()
_(cDJ,lIJ)
var c9J=_v()
_(cDJ,c9J)
cs.push("./packageComponent/pages/form/checkbox/checkbox.wxml:template:33:4")
var o0J=_oz(z,28,e,s,gg)
var lAK=_gd(x[13],o0J,e_,d_)
if(lAK){
var aBK={}
var cur_globalf=gg.f
c9J.wxXCkey=3
lAK(aBK,aBK,c9J,gg)
gg.f=cur_globalf
}
else _w(o0J,x[13],33,16)
cs.pop()
cs.pop()
_(r,cDJ)
fCJ.pop()
fCJ.pop()
return r
}
e_[x[13]]={f:m11,j:[],i:[],ti:[x[5],x[6]],ic:[]}
d_[x[14]]={}
var m12=function(e,s,r,gg){
var z=gz$7061636b616765436f6d706f6e656e742f_13()
cs.push("./packageComponent/pages/form/editor/editor.wxml:view:1:1")
var eDK=_mz(z,'view',['class',0,'style',1],[],e,s,gg)
cs.push("./packageComponent/pages/form/editor/editor.wxml:editor:2:3")
var bEK=_mz(z,'editor',['bindready',2,'bindstatuschange',1,'class',2,'id',3,'placeholder',4],[],e,s,gg)
cs.pop()
_(eDK,bEK)
cs.pop()
_(r,eDK)
cs.push("./packageComponent/pages/form/editor/editor.wxml:view:6:2")
var oFK=_mz(z,'view',['catchtouchend',7,'class',1,'hidden',2,'style',3],[],e,s,gg)
cs.push("./packageComponent/pages/form/editor/editor.wxml:i:7:3")
var xGK=_mz(z,'i',['catchtouchend',11,'class',1],[],e,s,gg)
cs.pop()
_(oFK,xGK)
cs.push("./packageComponent/pages/form/editor/editor.wxml:i:8:3")
var oHK=_mz(z,'i',['class',13,'data-name',1,'data-value',2],[],e,s,gg)
cs.pop()
_(oFK,oHK)
cs.push("./packageComponent/pages/form/editor/editor.wxml:i:9:3")
var fIK=_mz(z,'i',['class',16,'data-name',1,'data-value',2],[],e,s,gg)
cs.pop()
_(oFK,fIK)
cs.push("./packageComponent/pages/form/editor/editor.wxml:i:10:3")
var cJK=_mz(z,'i',['class',19,'data-name',1],[],e,s,gg)
cs.pop()
_(oFK,cJK)
cs.push("./packageComponent/pages/form/editor/editor.wxml:i:11:3")
var hKK=_mz(z,'i',['class',21,'data-name',1],[],e,s,gg)
cs.pop()
_(oFK,hKK)
cs.push("./packageComponent/pages/form/editor/editor.wxml:i:12:3")
var oLK=_mz(z,'i',['class',23,'data-name',1],[],e,s,gg)
cs.pop()
_(oFK,oLK)
cs.push("./packageComponent/pages/form/editor/editor.wxml:i:13:3")
var cMK=_mz(z,'i',['class',25,'data-name',1,'data-value',2],[],e,s,gg)
cs.pop()
_(oFK,cMK)
cs.push("./packageComponent/pages/form/editor/editor.wxml:i:14:3")
var oNK=_mz(z,'i',['class',28,'data-name',1,'data-value',2],[],e,s,gg)
cs.pop()
_(oFK,oNK)
cs.push("./packageComponent/pages/form/editor/editor.wxml:i:15:3")
var lOK=_mz(z,'i',['class',31,'data-name',1,'data-value',2],[],e,s,gg)
cs.pop()
_(oFK,lOK)
cs.pop()
_(r,oFK)
return r
}
e_[x[14]]={f:m12,j:[],i:[],ti:[],ic:[]}
d_[x[15]]={}
var m13=function(e,s,r,gg){
var z=gz$7061636b616765436f6d706f6e656e742f_14()
var tQK=e_[x[15]].i
_ai(tQK,x[5],e_,x[15],1,1)
_ai(tQK,x[6],e_,x[15],2,2)
cs.push("./packageComponent/pages/form/form/form.wxml:view:4:2")
var eRK=_mz(z,'view',['class',0,'data-weui-theme',1],[],e,s,gg)
var bSK=_v()
_(eRK,bSK)
cs.push("./packageComponent/pages/form/form/form.wxml:template:5:4")
var oTK=_oz(z,3,e,s,gg)
var xUK=_gd(x[15],oTK,e_,d_)
if(xUK){
var oVK=_1z(z,2,e,s,gg) || {}
var cur_globalf=gg.f
bSK.wxXCkey=3
xUK(oVK,oVK,bSK,gg)
gg.f=cur_globalf
}
else _w(oTK,x[15],5,16)
cs.pop()
cs.push("./packageComponent/pages/form/form/form.wxml:view:7:4")
var fWK=_n('view')
_rz(z,fWK,'class',4,e,s,gg)
cs.push("./packageComponent/pages/form/form/form.wxml:form:8:6")
var cXK=_mz(z,'form',['catchreset',5,'catchsubmit',1],[],e,s,gg)
cs.push("./packageComponent/pages/form/form/form.wxml:view:9:8")
var hYK=_n('view')
_rz(z,hYK,'class',7,e,s,gg)
cs.push("./packageComponent/pages/form/form/form.wxml:view:10:10")
var oZK=_n('view')
_rz(z,oZK,'class',8,e,s,gg)
var c1K=_oz(z,9,e,s,gg)
_(oZK,c1K)
cs.pop()
_(hYK,oZK)
cs.push("./packageComponent/pages/form/form/form.wxml:switch:11:10")
var o2K=_n('switch')
_rz(z,o2K,'name',10,e,s,gg)
cs.pop()
_(hYK,o2K)
cs.pop()
_(cXK,hYK)
cs.push("./packageComponent/pages/form/form/form.wxml:view:14:8")
var l3K=_n('view')
_rz(z,l3K,'class',11,e,s,gg)
cs.push("./packageComponent/pages/form/form/form.wxml:view:15:10")
var a4K=_n('view')
_rz(z,a4K,'class',12,e,s,gg)
var t5K=_oz(z,13,e,s,gg)
_(a4K,t5K)
cs.pop()
_(l3K,a4K)
cs.push("./packageComponent/pages/form/form/form.wxml:radio-group:16:10")
var e6K=_n('radio-group')
_rz(z,e6K,'name',14,e,s,gg)
cs.push("./packageComponent/pages/form/form/form.wxml:label:17:12")
var b7K=_n('label')
cs.push("./packageComponent/pages/form/form/form.wxml:radio:17:19")
var o8K=_n('radio')
_rz(z,o8K,'value',15,e,s,gg)
cs.pop()
_(b7K,o8K)
var x9K=_oz(z,16,e,s,gg)
_(b7K,x9K)
cs.pop()
_(e6K,b7K)
cs.push("./packageComponent/pages/form/form/form.wxml:label:18:12")
var o0K=_n('label')
cs.push("./packageComponent/pages/form/form/form.wxml:radio:18:19")
var fAL=_n('radio')
_rz(z,fAL,'value',17,e,s,gg)
cs.pop()
_(o0K,fAL)
var cBL=_oz(z,18,e,s,gg)
_(o0K,cBL)
cs.pop()
_(e6K,o0K)
cs.pop()
_(l3K,e6K)
cs.pop()
_(cXK,l3K)
cs.push("./packageComponent/pages/form/form/form.wxml:view:22:8")
var hCL=_n('view')
_rz(z,hCL,'class',19,e,s,gg)
cs.push("./packageComponent/pages/form/form/form.wxml:view:23:10")
var oDL=_n('view')
_rz(z,oDL,'class',20,e,s,gg)
var cEL=_oz(z,21,e,s,gg)
_(oDL,cEL)
cs.pop()
_(hCL,oDL)
cs.push("./packageComponent/pages/form/form/form.wxml:checkbox-group:24:10")
var oFL=_n('checkbox-group')
_rz(z,oFL,'name',22,e,s,gg)
cs.push("./packageComponent/pages/form/form/form.wxml:label:25:12")
var lGL=_n('label')
cs.push("./packageComponent/pages/form/form/form.wxml:checkbox:25:19")
var aHL=_n('checkbox')
_rz(z,aHL,'value',23,e,s,gg)
cs.pop()
_(lGL,aHL)
var tIL=_oz(z,24,e,s,gg)
_(lGL,tIL)
cs.pop()
_(oFL,lGL)
cs.push("./packageComponent/pages/form/form/form.wxml:label:26:12")
var eJL=_n('label')
cs.push("./packageComponent/pages/form/form/form.wxml:checkbox:26:19")
var bKL=_n('checkbox')
_rz(z,bKL,'value',25,e,s,gg)
cs.pop()
_(eJL,bKL)
var oLL=_oz(z,26,e,s,gg)
_(eJL,oLL)
cs.pop()
_(oFL,eJL)
cs.pop()
_(hCL,oFL)
cs.pop()
_(cXK,hCL)
cs.push("./packageComponent/pages/form/form/form.wxml:view:30:8")
var xML=_n('view')
_rz(z,xML,'class',27,e,s,gg)
cs.push("./packageComponent/pages/form/form/form.wxml:view:31:10")
var oNL=_n('view')
_rz(z,oNL,'class',28,e,s,gg)
var fOL=_oz(z,29,e,s,gg)
_(oNL,fOL)
cs.pop()
_(xML,oNL)
cs.push("./packageComponent/pages/form/form/form.wxml:slider:32:10")
var cPL=_mz(z,'slider',['showValue',-1,'name',30,'value',1],[],e,s,gg)
cs.pop()
_(xML,cPL)
cs.pop()
_(cXK,xML)
cs.push("./packageComponent/pages/form/form/form.wxml:view:35:8")
var hQL=_n('view')
_rz(z,hQL,'class',32,e,s,gg)
cs.push("./packageComponent/pages/form/form/form.wxml:view:36:10")
var oRL=_n('view')
_rz(z,oRL,'class',33,e,s,gg)
var cSL=_oz(z,34,e,s,gg)
_(oRL,cSL)
cs.pop()
_(hQL,oRL)
cs.push("./packageComponent/pages/form/form/form.wxml:view:37:10")
var oTL=_n('view')
_rz(z,oTL,'class',35,e,s,gg)
cs.push("./packageComponent/pages/form/form/form.wxml:view:38:12")
var lUL=_n('view')
_rz(z,lUL,'class',36,e,s,gg)
cs.push("./packageComponent/pages/form/form/form.wxml:view:39:14")
var aVL=_n('view')
_rz(z,aVL,'class',37,e,s,gg)
cs.push("./packageComponent/pages/form/form/form.wxml:input:40:16")
var tWL=_mz(z,'input',['class',38,'name',1,'placeholder',2],[],e,s,gg)
cs.pop()
_(aVL,tWL)
cs.pop()
_(lUL,aVL)
cs.pop()
_(oTL,lUL)
cs.pop()
_(hQL,oTL)
cs.pop()
_(cXK,hQL)
cs.push("./packageComponent/pages/form/form/form.wxml:view:46:8")
var eXL=_n('view')
_rz(z,eXL,'class',41,e,s,gg)
cs.push("./packageComponent/pages/form/form/form.wxml:button:47:10")
var bYL=_mz(z,'button',['formType',42,'type',1],[],e,s,gg)
var oZL=_oz(z,44,e,s,gg)
_(bYL,oZL)
cs.pop()
_(eXL,bYL)
cs.push("./packageComponent/pages/form/form/form.wxml:button:48:10")
var x1L=_n('button')
_rz(z,x1L,'formType',45,e,s,gg)
var o2L=_oz(z,46,e,s,gg)
_(x1L,o2L)
cs.pop()
_(eXL,x1L)
cs.pop()
_(cXK,eXL)
cs.pop()
_(fWK,cXK)
cs.pop()
_(eRK,fWK)
var f3L=_v()
_(eRK,f3L)
cs.push("./packageComponent/pages/form/form/form.wxml:template:53:4")
var c4L=_oz(z,47,e,s,gg)
var h5L=_gd(x[15],c4L,e_,d_)
if(h5L){
var o6L={}
var cur_globalf=gg.f
f3L.wxXCkey=3
h5L(o6L,o6L,f3L,gg)
gg.f=cur_globalf
}
else _w(c4L,x[15],53,16)
cs.pop()
cs.pop()
_(r,eRK)
tQK.pop()
tQK.pop()
return r
}
e_[x[15]]={f:m13,j:[],i:[],ti:[x[5],x[6]],ic:[]}
d_[x[16]]={}
var m14=function(e,s,r,gg){
var z=gz$7061636b616765436f6d706f6e656e742f_15()
var o8L=e_[x[16]].i
_ai(o8L,x[5],e_,x[16],1,1)
_ai(o8L,x[6],e_,x[16],2,2)
cs.push("./packageComponent/pages/form/input/input.wxml:view:4:2")
var l9L=_mz(z,'view',['class',0,'data-weui-theme',1],[],e,s,gg)
var a0L=_v()
_(l9L,a0L)
cs.push("./packageComponent/pages/form/input/input.wxml:template:5:4")
var tAM=_oz(z,3,e,s,gg)
var eBM=_gd(x[16],tAM,e_,d_)
if(eBM){
var bCM=_1z(z,2,e,s,gg) || {}
var cur_globalf=gg.f
a0L.wxXCkey=3
eBM(bCM,bCM,a0L,gg)
gg.f=cur_globalf
}
else _w(tAM,x[16],5,16)
cs.pop()
cs.push("./packageComponent/pages/form/input/input.wxml:view:7:4")
var oDM=_n('view')
_rz(z,oDM,'class',4,e,s,gg)
cs.push("./packageComponent/pages/form/input/input.wxml:view:8:6")
var xEM=_n('view')
_rz(z,xEM,'class',5,e,s,gg)
cs.push("./packageComponent/pages/form/input/input.wxml:view:9:8")
var oFM=_n('view')
_rz(z,oFM,'class',6,e,s,gg)
var fGM=_oz(z,7,e,s,gg)
_(oFM,fGM)
cs.pop()
_(xEM,oFM)
cs.push("./packageComponent/pages/form/input/input.wxml:view:10:8")
var cHM=_n('view')
_rz(z,cHM,'class',8,e,s,gg)
cs.push("./packageComponent/pages/form/input/input.wxml:view:11:10")
var hIM=_n('view')
_rz(z,hIM,'class',9,e,s,gg)
cs.push("./packageComponent/pages/form/input/input.wxml:input:12:12")
var oJM=_mz(z,'input',['focus',-1,'class',10,'placeholder',1],[],e,s,gg)
cs.pop()
_(hIM,oJM)
cs.pop()
_(cHM,hIM)
cs.pop()
_(xEM,cHM)
cs.pop()
_(oDM,xEM)
cs.push("./packageComponent/pages/form/input/input.wxml:view:16:6")
var cKM=_n('view')
_rz(z,cKM,'class',12,e,s,gg)
cs.push("./packageComponent/pages/form/input/input.wxml:view:17:8")
var oLM=_n('view')
_rz(z,oLM,'class',13,e,s,gg)
var lMM=_oz(z,14,e,s,gg)
_(oLM,lMM)
cs.pop()
_(cKM,oLM)
cs.push("./packageComponent/pages/form/input/input.wxml:view:18:8")
var aNM=_n('view')
_rz(z,aNM,'class',15,e,s,gg)
cs.push("./packageComponent/pages/form/input/input.wxml:view:19:10")
var tOM=_n('view')
_rz(z,tOM,'class',16,e,s,gg)
cs.push("./packageComponent/pages/form/input/input.wxml:input:20:12")
var ePM=_mz(z,'input',['class',17,'maxlength',1,'placeholder',2],[],e,s,gg)
cs.pop()
_(tOM,ePM)
cs.pop()
_(aNM,tOM)
cs.pop()
_(cKM,aNM)
cs.pop()
_(oDM,cKM)
cs.push("./packageComponent/pages/form/input/input.wxml:view:24:6")
var bQM=_n('view')
_rz(z,bQM,'class',20,e,s,gg)
cs.push("./packageComponent/pages/form/input/input.wxml:view:25:8")
var oRM=_n('view')
_rz(z,oRM,'class',21,e,s,gg)
var xSM=_oz(z,22,e,s,gg)
_(oRM,xSM)
cs.pop()
_(bQM,oRM)
cs.push("./packageComponent/pages/form/input/input.wxml:view:26:8")
var oTM=_n('view')
_rz(z,oTM,'class',23,e,s,gg)
cs.push("./packageComponent/pages/form/input/input.wxml:view:27:10")
var fUM=_n('view')
_rz(z,fUM,'class',24,e,s,gg)
cs.push("./packageComponent/pages/form/input/input.wxml:input:28:12")
var cVM=_mz(z,'input',['bindinput',25,'class',1,'maxlength',2,'placeholder',3],[],e,s,gg)
cs.pop()
_(fUM,cVM)
cs.pop()
_(oTM,fUM)
cs.pop()
_(bQM,oTM)
cs.pop()
_(oDM,bQM)
cs.push("./packageComponent/pages/form/input/input.wxml:view:32:6")
var hWM=_n('view')
_rz(z,hWM,'class',29,e,s,gg)
cs.push("./packageComponent/pages/form/input/input.wxml:view:33:8")
var oXM=_n('view')
_rz(z,oXM,'class',30,e,s,gg)
var cYM=_oz(z,31,e,s,gg)
_(oXM,cYM)
cs.pop()
_(hWM,oXM)
cs.push("./packageComponent/pages/form/input/input.wxml:view:34:8")
var oZM=_n('view')
_rz(z,oZM,'class',32,e,s,gg)
cs.push("./packageComponent/pages/form/input/input.wxml:view:35:10")
var l1M=_n('view')
_rz(z,l1M,'class',33,e,s,gg)
cs.push("./packageComponent/pages/form/input/input.wxml:input:36:12")
var a2M=_mz(z,'input',['bindinput',34,'class',1,'placeholder',2],[],e,s,gg)
cs.pop()
_(l1M,a2M)
cs.pop()
_(oZM,l1M)
cs.pop()
_(hWM,oZM)
cs.pop()
_(oDM,hWM)
cs.push("./packageComponent/pages/form/input/input.wxml:view:40:6")
var t3M=_n('view')
_rz(z,t3M,'class',37,e,s,gg)
cs.push("./packageComponent/pages/form/input/input.wxml:view:41:8")
var e4M=_n('view')
_rz(z,e4M,'class',38,e,s,gg)
var b5M=_oz(z,39,e,s,gg)
_(e4M,b5M)
cs.pop()
_(t3M,e4M)
cs.push("./packageComponent/pages/form/input/input.wxml:view:42:8")
var o6M=_n('view')
_rz(z,o6M,'class',40,e,s,gg)
cs.push("./packageComponent/pages/form/input/input.wxml:view:43:10")
var x7M=_n('view')
_rz(z,x7M,'class',41,e,s,gg)
cs.push("./packageComponent/pages/form/input/input.wxml:input:44:12")
var o8M=_mz(z,'input',['bindinput',42,'class',1,'placeholder',2],[],e,s,gg)
cs.pop()
_(x7M,o8M)
cs.pop()
_(o6M,x7M)
cs.pop()
_(t3M,o6M)
cs.pop()
_(oDM,t3M)
cs.push("./packageComponent/pages/form/input/input.wxml:view:48:6")
var f9M=_n('view')
_rz(z,f9M,'class',45,e,s,gg)
cs.push("./packageComponent/pages/form/input/input.wxml:view:49:8")
var c0M=_n('view')
_rz(z,c0M,'class',46,e,s,gg)
var hAN=_oz(z,47,e,s,gg)
_(c0M,hAN)
cs.pop()
_(f9M,c0M)
cs.push("./packageComponent/pages/form/input/input.wxml:view:50:8")
var oBN=_n('view')
_rz(z,oBN,'class',48,e,s,gg)
cs.push("./packageComponent/pages/form/input/input.wxml:view:51:10")
var cCN=_n('view')
_rz(z,cCN,'class',49,e,s,gg)
cs.push("./packageComponent/pages/form/input/input.wxml:input:52:12")
var oDN=_mz(z,'input',['class',50,'placeholder',1,'type',2],[],e,s,gg)
cs.pop()
_(cCN,oDN)
cs.pop()
_(oBN,cCN)
cs.pop()
_(f9M,oBN)
cs.pop()
_(oDM,f9M)
cs.push("./packageComponent/pages/form/input/input.wxml:view:56:6")
var lEN=_n('view')
_rz(z,lEN,'class',53,e,s,gg)
cs.push("./packageComponent/pages/form/input/input.wxml:view:57:8")
var aFN=_n('view')
_rz(z,aFN,'class',54,e,s,gg)
var tGN=_oz(z,55,e,s,gg)
_(aFN,tGN)
cs.pop()
_(lEN,aFN)
cs.push("./packageComponent/pages/form/input/input.wxml:view:58:8")
var eHN=_n('view')
_rz(z,eHN,'class',56,e,s,gg)
cs.push("./packageComponent/pages/form/input/input.wxml:view:59:10")
var bIN=_n('view')
_rz(z,bIN,'class',57,e,s,gg)
cs.push("./packageComponent/pages/form/input/input.wxml:input:60:12")
var oJN=_mz(z,'input',['password',-1,'class',58,'placeholder',1,'type',2],[],e,s,gg)
cs.pop()
_(bIN,oJN)
cs.pop()
_(eHN,bIN)
cs.pop()
_(lEN,eHN)
cs.pop()
_(oDM,lEN)
cs.push("./packageComponent/pages/form/input/input.wxml:view:64:6")
var xKN=_n('view')
_rz(z,xKN,'class',61,e,s,gg)
cs.push("./packageComponent/pages/form/input/input.wxml:view:65:8")
var oLN=_n('view')
_rz(z,oLN,'class',62,e,s,gg)
var fMN=_oz(z,63,e,s,gg)
_(oLN,fMN)
cs.pop()
_(xKN,oLN)
cs.push("./packageComponent/pages/form/input/input.wxml:view:66:8")
var cNN=_n('view')
_rz(z,cNN,'class',64,e,s,gg)
cs.push("./packageComponent/pages/form/input/input.wxml:view:67:10")
var hON=_n('view')
_rz(z,hON,'class',65,e,s,gg)
cs.push("./packageComponent/pages/form/input/input.wxml:input:68:12")
var oPN=_mz(z,'input',['class',66,'placeholder',1,'type',2],[],e,s,gg)
cs.pop()
_(hON,oPN)
cs.pop()
_(cNN,hON)
cs.pop()
_(xKN,cNN)
cs.pop()
_(oDM,xKN)
cs.push("./packageComponent/pages/form/input/input.wxml:view:72:6")
var cQN=_n('view')
_rz(z,cQN,'class',69,e,s,gg)
cs.push("./packageComponent/pages/form/input/input.wxml:view:73:8")
var oRN=_n('view')
_rz(z,oRN,'class',70,e,s,gg)
var lSN=_oz(z,71,e,s,gg)
_(oRN,lSN)
cs.pop()
_(cQN,oRN)
cs.push("./packageComponent/pages/form/input/input.wxml:view:74:8")
var aTN=_n('view')
_rz(z,aTN,'class',72,e,s,gg)
cs.push("./packageComponent/pages/form/input/input.wxml:view:75:10")
var tUN=_n('view')
_rz(z,tUN,'class',73,e,s,gg)
cs.push("./packageComponent/pages/form/input/input.wxml:input:76:12")
var eVN=_mz(z,'input',['class',74,'placeholder',1,'type',2],[],e,s,gg)
cs.pop()
_(tUN,eVN)
cs.pop()
_(aTN,tUN)
cs.pop()
_(cQN,aTN)
cs.pop()
_(oDM,cQN)
cs.push("./packageComponent/pages/form/input/input.wxml:view:80:6")
var bWN=_n('view')
_rz(z,bWN,'class',77,e,s,gg)
cs.push("./packageComponent/pages/form/input/input.wxml:view:81:8")
var oXN=_n('view')
_rz(z,oXN,'class',78,e,s,gg)
var xYN=_oz(z,79,e,s,gg)
_(oXN,xYN)
cs.pop()
_(bWN,oXN)
cs.push("./packageComponent/pages/form/input/input.wxml:view:82:8")
var oZN=_n('view')
_rz(z,oZN,'class',80,e,s,gg)
cs.push("./packageComponent/pages/form/input/input.wxml:view:83:10")
var f1N=_n('view')
_rz(z,f1N,'class',81,e,s,gg)
cs.push("./packageComponent/pages/form/input/input.wxml:input:84:12")
var c2N=_mz(z,'input',['class',82,'placeholder',1,'placeholderStyle',2],[],e,s,gg)
cs.pop()
_(f1N,c2N)
cs.pop()
_(oZN,f1N)
cs.pop()
_(bWN,oZN)
cs.pop()
_(oDM,bWN)
cs.pop()
_(l9L,oDM)
var h3N=_v()
_(l9L,h3N)
cs.push("./packageComponent/pages/form/input/input.wxml:template:90:4")
var o4N=_oz(z,85,e,s,gg)
var c5N=_gd(x[16],o4N,e_,d_)
if(c5N){
var o6N={}
var cur_globalf=gg.f
h3N.wxXCkey=3
c5N(o6N,o6N,h3N,gg)
gg.f=cur_globalf
}
else _w(o4N,x[16],90,16)
cs.pop()
cs.pop()
_(r,l9L)
o8L.pop()
o8L.pop()
return r
}
e_[x[16]]={f:m14,j:[],i:[],ti:[x[5],x[6]],ic:[]}
d_[x[17]]={}
var m15=function(e,s,r,gg){
var z=gz$7061636b616765436f6d706f6e656e742f_16()
var a8N=e_[x[17]].i
_ai(a8N,x[5],e_,x[17],1,1)
_ai(a8N,x[6],e_,x[17],2,2)
cs.push("./packageComponent/pages/form/label/label.wxml:view:4:2")
var t9N=_mz(z,'view',['class',0,'data-weui-theme',1],[],e,s,gg)
var e0N=_v()
_(t9N,e0N)
cs.push("./packageComponent/pages/form/label/label.wxml:template:5:4")
var bAO=_oz(z,3,e,s,gg)
var oBO=_gd(x[17],bAO,e_,d_)
if(oBO){
var xCO=_1z(z,2,e,s,gg) || {}
var cur_globalf=gg.f
e0N.wxXCkey=3
oBO(xCO,xCO,e0N,gg)
gg.f=cur_globalf
}
else _w(bAO,x[17],5,16)
cs.pop()
cs.push("./packageComponent/pages/form/label/label.wxml:view:7:4")
var oDO=_n('view')
_rz(z,oDO,'class',4,e,s,gg)
cs.push("./packageComponent/pages/form/label/label.wxml:view:8:6")
var fEO=_n('view')
_rz(z,fEO,'class',5,e,s,gg)
cs.push("./packageComponent/pages/form/label/label.wxml:view:9:8")
var cFO=_n('view')
_rz(z,cFO,'class',6,e,s,gg)
var hGO=_oz(z,7,e,s,gg)
_(cFO,hGO)
cs.pop()
_(fEO,cFO)
cs.push("./packageComponent/pages/form/label/label.wxml:checkbox-group:10:8")
var oHO=_mz(z,'checkbox-group',['bindchange',8,'class',1],[],e,s,gg)
var cIO=_v()
_(oHO,cIO)
cs.push("./packageComponent/pages/form/label/label.wxml:view:11:10")
var oJO=function(aLO,lKO,tMO,gg){
cs.push("./packageComponent/pages/form/label/label.wxml:view:11:10")
var bOO=_n('view')
_rz(z,bOO,'class',11,aLO,lKO,gg)
cs.push("./packageComponent/pages/form/label/label.wxml:label:12:12")
var oPO=_n('label')
cs.push("./packageComponent/pages/form/label/label.wxml:checkbox:13:14")
var xQO=_mz(z,'checkbox',['checked',12,'value',1],[],aLO,lKO,gg)
cs.pop()
_(oPO,xQO)
cs.push("./packageComponent/pages/form/label/label.wxml:text:14:14")
var oRO=_n('text')
_rz(z,oRO,'class',14,aLO,lKO,gg)
var fSO=_oz(z,15,aLO,lKO,gg)
_(oRO,fSO)
cs.pop()
_(oPO,oRO)
cs.pop()
_(bOO,oPO)
cs.pop()
_(tMO,bOO)
return tMO
}
_wp('./packageComponent/pages/form/label/label.wxml:view:11:10: Now you can provide attr `wx:key` for a `wx:for` to improve performance.')
cIO.wxXCkey=2
_2z(z,10,oJO,e,s,gg,cIO,'item','index','')
cs.pop()
cs.pop()
_(fEO,oHO)
cs.pop()
_(oDO,fEO)
cs.push("./packageComponent/pages/form/label/label.wxml:view:20:6")
var cTO=_n('view')
_rz(z,cTO,'class',16,e,s,gg)
cs.push("./packageComponent/pages/form/label/label.wxml:view:21:8")
var hUO=_n('view')
_rz(z,hUO,'class',17,e,s,gg)
var oVO=_oz(z,18,e,s,gg)
_(hUO,oVO)
cs.pop()
_(cTO,hUO)
cs.push("./packageComponent/pages/form/label/label.wxml:radio-group:22:8")
var cWO=_mz(z,'radio-group',['bindchange',19,'class',1],[],e,s,gg)
var oXO=_v()
_(cWO,oXO)
cs.push("./packageComponent/pages/form/label/label.wxml:view:23:10")
var lYO=function(t1O,aZO,e2O,gg){
cs.push("./packageComponent/pages/form/label/label.wxml:view:23:10")
var o4O=_n('view')
_rz(z,o4O,'class',22,t1O,aZO,gg)
cs.push("./packageComponent/pages/form/label/label.wxml:radio:24:12")
var x5O=_mz(z,'radio',['checked',23,'id',1,'value',2],[],t1O,aZO,gg)
cs.pop()
_(o4O,x5O)
cs.push("./packageComponent/pages/form/label/label.wxml:label:25:12")
var o6O=_mz(z,'label',['class',26,'for',1],[],t1O,aZO,gg)
cs.push("./packageComponent/pages/form/label/label.wxml:text:25:60")
var f7O=_n('text')
var c8O=_oz(z,28,t1O,aZO,gg)
_(f7O,c8O)
cs.pop()
_(o6O,f7O)
cs.pop()
_(o4O,o6O)
cs.pop()
_(e2O,o4O)
return e2O
}
_wp('./packageComponent/pages/form/label/label.wxml:view:23:10: Now you can provide attr `wx:key` for a `wx:for` to improve performance.')
oXO.wxXCkey=2
_2z(z,21,lYO,e,s,gg,oXO,'item','index','')
cs.pop()
cs.pop()
_(cTO,cWO)
cs.pop()
_(oDO,cTO)
cs.push("./packageComponent/pages/form/label/label.wxml:view:30:6")
var h9O=_n('view')
_rz(z,h9O,'class',29,e,s,gg)
cs.push("./packageComponent/pages/form/label/label.wxml:view:31:8")
var o0O=_n('view')
_rz(z,o0O,'class',30,e,s,gg)
var cAP=_oz(z,31,e,s,gg)
_(o0O,cAP)
cs.pop()
_(h9O,o0O)
cs.push("./packageComponent/pages/form/label/label.wxml:label:32:8")
var oBP=_n('label')
_rz(z,oBP,'class',32,e,s,gg)
cs.push("./packageComponent/pages/form/label/label.wxml:checkbox:33:10")
var lCP=_n('checkbox')
_rz(z,lCP,'class',33,e,s,gg)
var aDP=_oz(z,34,e,s,gg)
_(lCP,aDP)
cs.pop()
_(oBP,lCP)
cs.push("./packageComponent/pages/form/label/label.wxml:checkbox:34:10")
var tEP=_n('checkbox')
_rz(z,tEP,'class',35,e,s,gg)
var eFP=_oz(z,36,e,s,gg)
_(tEP,eFP)
cs.pop()
_(oBP,tEP)
cs.push("./packageComponent/pages/form/label/label.wxml:view:35:10")
var bGP=_n('view')
_rz(z,bGP,'class',37,e,s,gg)
var oHP=_oz(z,38,e,s,gg)
_(bGP,oHP)
cs.pop()
_(oBP,bGP)
cs.pop()
_(h9O,oBP)
cs.pop()
_(oDO,h9O)
cs.pop()
_(t9N,oDO)
var xIP=_v()
_(t9N,xIP)
cs.push("./packageComponent/pages/form/label/label.wxml:template:40:4")
var oJP=_oz(z,39,e,s,gg)
var fKP=_gd(x[17],oJP,e_,d_)
if(fKP){
var cLP={}
var cur_globalf=gg.f
xIP.wxXCkey=3
fKP(cLP,cLP,xIP,gg)
gg.f=cur_globalf
}
else _w(oJP,x[17],40,16)
cs.pop()
cs.pop()
_(r,t9N)
a8N.pop()
a8N.pop()
return r
}
e_[x[17]]={f:m15,j:[],i:[],ti:[x[5],x[6]],ic:[]}
d_[x[18]]={}
var m16=function(e,s,r,gg){
var z=gz$7061636b616765436f6d706f6e656e742f_17()
var oNP=e_[x[18]].i
_ai(oNP,x[5],e_,x[18],1,1)
_ai(oNP,x[6],e_,x[18],2,2)
cs.push("./packageComponent/pages/form/picker-view/picker-view.wxml:view:4:2")
var cOP=_mz(z,'view',['class',0,'data-weui-theme',1],[],e,s,gg)
var oPP=_v()
_(cOP,oPP)
cs.push("./packageComponent/pages/form/picker-view/picker-view.wxml:template:5:4")
var lQP=_oz(z,3,e,s,gg)
var aRP=_gd(x[18],lQP,e_,d_)
if(aRP){
var tSP=_1z(z,2,e,s,gg) || {}
var cur_globalf=gg.f
oPP.wxXCkey=3
aRP(tSP,tSP,oPP,gg)
gg.f=cur_globalf
}
else _w(lQP,x[18],5,16)
cs.pop()
cs.push("./packageComponent/pages/form/picker-view/picker-view.wxml:view:7:4")
var eTP=_n('view')
_rz(z,eTP,'class',4,e,s,gg)
cs.push("./packageComponent/pages/form/picker-view/picker-view.wxml:view:8:6")
var bUP=_n('view')
_rz(z,bUP,'class',5,e,s,gg)
var oVP=_oz(z,6,e,s,gg)
_(bUP,oVP)
cs.pop()
_(eTP,bUP)
cs.push("./packageComponent/pages/form/picker-view/picker-view.wxml:picker-view:9:6")
var xWP=_mz(z,'picker-view',['bindchange',7,'indicatorStyle',1,'style',2,'value',3],[],e,s,gg)
cs.push("./packageComponent/pages/form/picker-view/picker-view.wxml:picker-view-column:10:8")
var oXP=_n('picker-view-column')
var fYP=_v()
_(oXP,fYP)
cs.push("./packageComponent/pages/form/picker-view/picker-view.wxml:view:11:10")
var cZP=function(o2P,h1P,c3P,gg){
cs.push("./packageComponent/pages/form/picker-view/picker-view.wxml:view:11:10")
var l5P=_n('view')
_rz(z,l5P,'style',13,o2P,h1P,gg)
var a6P=_oz(z,14,o2P,h1P,gg)
_(l5P,a6P)
cs.pop()
_(c3P,l5P)
return c3P
}
_wp('./packageComponent/pages/form/picker-view/picker-view.wxml:view:11:10: wx:key="{{years}}" does not look like a valid key name (did you mean wx:key="years" ?)')
fYP.wxXCkey=2
_2z(z,11,cZP,e,s,gg,fYP,'item','index','{{years}}')
cs.pop()
cs.pop()
_(xWP,oXP)
cs.push("./packageComponent/pages/form/picker-view/picker-view.wxml:picker-view-column:13:8")
var t7P=_n('picker-view-column')
var e8P=_v()
_(t7P,e8P)
cs.push("./packageComponent/pages/form/picker-view/picker-view.wxml:view:14:10")
var b9P=function(xAQ,o0P,oBQ,gg){
cs.push("./packageComponent/pages/form/picker-view/picker-view.wxml:view:14:10")
var cDQ=_n('view')
_rz(z,cDQ,'style',17,xAQ,o0P,gg)
var hEQ=_oz(z,18,xAQ,o0P,gg)
_(cDQ,hEQ)
cs.pop()
_(oBQ,cDQ)
return oBQ
}
_wp('./packageComponent/pages/form/picker-view/picker-view.wxml:view:14:10: wx:key="{{months}}" does not look like a valid key name (did you mean wx:key="months" ?)')
e8P.wxXCkey=2
_2z(z,15,b9P,e,s,gg,e8P,'item','index','{{months}}')
cs.pop()
cs.pop()
_(xWP,t7P)
cs.push("./packageComponent/pages/form/picker-view/picker-view.wxml:picker-view-column:16:8")
var oFQ=_n('picker-view-column')
var cGQ=_v()
_(oFQ,cGQ)
cs.push("./packageComponent/pages/form/picker-view/picker-view.wxml:view:17:10")
var oHQ=function(aJQ,lIQ,tKQ,gg){
cs.push("./packageComponent/pages/form/picker-view/picker-view.wxml:view:17:10")
var bMQ=_n('view')
_rz(z,bMQ,'style',21,aJQ,lIQ,gg)
var oNQ=_oz(z,22,aJQ,lIQ,gg)
_(bMQ,oNQ)
cs.pop()
_(tKQ,bMQ)
return tKQ
}
_wp('./packageComponent/pages/form/picker-view/picker-view.wxml:view:17:10: wx:key="{{days}}" does not look like a valid key name (did you mean wx:key="days" ?)')
cGQ.wxXCkey=2
_2z(z,19,oHQ,e,s,gg,cGQ,'item','index','{{days}}')
cs.pop()
cs.pop()
_(xWP,oFQ)
cs.push("./packageComponent/pages/form/picker-view/picker-view.wxml:picker-view-column:19:8")
var xOQ=_n('picker-view-column')
cs.push("./packageComponent/pages/form/picker-view/picker-view.wxml:view:20:10")
var oPQ=_n('view')
_rz(z,oPQ,'class',23,e,s,gg)
cs.push("./packageComponent/pages/form/picker-view/picker-view.wxml:image:21:12")
var fQQ=_mz(z,'image',['class',24,'src',1],[],e,s,gg)
cs.pop()
_(oPQ,fQQ)
cs.pop()
_(xOQ,oPQ)
cs.push("./packageComponent/pages/form/picker-view/picker-view.wxml:view:23:10")
var cRQ=_n('view')
_rz(z,cRQ,'class',26,e,s,gg)
cs.push("./packageComponent/pages/form/picker-view/picker-view.wxml:image:24:12")
var hSQ=_mz(z,'image',['class',27,'src',1],[],e,s,gg)
cs.pop()
_(cRQ,hSQ)
cs.pop()
_(xOQ,cRQ)
cs.pop()
_(xWP,xOQ)
cs.pop()
_(eTP,xWP)
cs.pop()
_(cOP,eTP)
var oTQ=_v()
_(cOP,oTQ)
cs.push("./packageComponent/pages/form/picker-view/picker-view.wxml:template:30:4")
var cUQ=_oz(z,29,e,s,gg)
var oVQ=_gd(x[18],cUQ,e_,d_)
if(oVQ){
var lWQ={}
var cur_globalf=gg.f
oTQ.wxXCkey=3
oVQ(lWQ,lWQ,oTQ,gg)
gg.f=cur_globalf
}
else _w(cUQ,x[18],30,16)
cs.pop()
cs.pop()
_(r,cOP)
oNP.pop()
oNP.pop()
return r
}
e_[x[18]]={f:m16,j:[],i:[],ti:[x[5],x[6]],ic:[]}
d_[x[19]]={}
var m17=function(e,s,r,gg){
var z=gz$7061636b616765436f6d706f6e656e742f_18()
var tYQ=e_[x[19]].i
_ai(tYQ,x[5],e_,x[19],1,1)
_ai(tYQ,x[6],e_,x[19],2,2)
cs.push("./packageComponent/pages/form/picker/picker.wxml:view:4:2")
var eZQ=_mz(z,'view',['class',0,'data-weui-theme',1],[],e,s,gg)
var b1Q=_v()
_(eZQ,b1Q)
cs.push("./packageComponent/pages/form/picker/picker.wxml:template:5:4")
var o2Q=_oz(z,3,e,s,gg)
var x3Q=_gd(x[19],o2Q,e_,d_)
if(x3Q){
var o4Q=_1z(z,2,e,s,gg) || {}
var cur_globalf=gg.f
b1Q.wxXCkey=3
x3Q(o4Q,o4Q,b1Q,gg)
gg.f=cur_globalf
}
else _w(o2Q,x[19],5,16)
cs.pop()
cs.push("./packageComponent/pages/form/picker/picker.wxml:view:7:4")
var f5Q=_n('view')
_rz(z,f5Q,'class',4,e,s,gg)
cs.push("./packageComponent/pages/form/picker/picker.wxml:view:8:6")
var c6Q=_n('view')
_rz(z,c6Q,'class',5,e,s,gg)
cs.push("./packageComponent/pages/form/picker/picker.wxml:view:9:8")
var h7Q=_n('view')
_rz(z,h7Q,'class',6,e,s,gg)
var o8Q=_oz(z,7,e,s,gg)
_(h7Q,o8Q)
cs.pop()
_(c6Q,h7Q)
cs.push("./packageComponent/pages/form/picker/picker.wxml:view:10:8")
var c9Q=_n('view')
_rz(z,c9Q,'class',8,e,s,gg)
cs.push("./packageComponent/pages/form/picker/picker.wxml:view:11:10")
var o0Q=_n('view')
_rz(z,o0Q,'class',9,e,s,gg)
cs.push("./packageComponent/pages/form/picker/picker.wxml:view:12:12")
var lAR=_n('view')
_rz(z,lAR,'class',10,e,s,gg)
cs.push("./packageComponent/pages/form/picker/picker.wxml:view:13:14")
var aBR=_n('view')
_rz(z,aBR,'class',11,e,s,gg)
var tCR=_oz(z,12,e,s,gg)
_(aBR,tCR)
cs.pop()
_(lAR,aBR)
cs.pop()
_(o0Q,lAR)
cs.push("./packageComponent/pages/form/picker/picker.wxml:view:15:12")
var eDR=_n('view')
_rz(z,eDR,'class',13,e,s,gg)
cs.push("./packageComponent/pages/form/picker/picker.wxml:picker:16:14")
var bER=_mz(z,'picker',['bindchange',14,'range',1,'value',2],[],e,s,gg)
cs.push("./packageComponent/pages/form/picker/picker.wxml:view:17:16")
var oFR=_n('view')
_rz(z,oFR,'class',17,e,s,gg)
var xGR=_oz(z,18,e,s,gg)
_(oFR,xGR)
cs.pop()
_(bER,oFR)
cs.pop()
_(eDR,bER)
cs.pop()
_(o0Q,eDR)
cs.pop()
_(c9Q,o0Q)
cs.pop()
_(c6Q,c9Q)
cs.push("./packageComponent/pages/form/picker/picker.wxml:view:23:8")
var oHR=_n('view')
_rz(z,oHR,'class',19,e,s,gg)
var fIR=_oz(z,20,e,s,gg)
_(oHR,fIR)
cs.pop()
_(c6Q,oHR)
cs.push("./packageComponent/pages/form/picker/picker.wxml:view:24:8")
var cJR=_n('view')
_rz(z,cJR,'class',21,e,s,gg)
cs.push("./packageComponent/pages/form/picker/picker.wxml:view:25:10")
var hKR=_n('view')
_rz(z,hKR,'class',22,e,s,gg)
cs.push("./packageComponent/pages/form/picker/picker.wxml:view:26:12")
var oLR=_n('view')
_rz(z,oLR,'class',23,e,s,gg)
cs.push("./packageComponent/pages/form/picker/picker.wxml:view:27:14")
var cMR=_n('view')
_rz(z,cMR,'class',24,e,s,gg)
var oNR=_oz(z,25,e,s,gg)
_(cMR,oNR)
cs.pop()
_(oLR,cMR)
cs.pop()
_(hKR,oLR)
cs.push("./packageComponent/pages/form/picker/picker.wxml:view:29:12")
var lOR=_n('view')
_rz(z,lOR,'class',26,e,s,gg)
cs.push("./packageComponent/pages/form/picker/picker.wxml:picker:30:14")
var aPR=_mz(z,'picker',['bindchange',27,'end',1,'mode',2,'start',3,'value',4],[],e,s,gg)
cs.push("./packageComponent/pages/form/picker/picker.wxml:view:31:16")
var tQR=_n('view')
_rz(z,tQR,'class',32,e,s,gg)
var eRR=_oz(z,33,e,s,gg)
_(tQR,eRR)
cs.pop()
_(aPR,tQR)
cs.pop()
_(lOR,aPR)
cs.pop()
_(hKR,lOR)
cs.pop()
_(cJR,hKR)
cs.pop()
_(c6Q,cJR)
cs.push("./packageComponent/pages/form/picker/picker.wxml:view:37:8")
var bSR=_n('view')
_rz(z,bSR,'class',34,e,s,gg)
var oTR=_oz(z,35,e,s,gg)
_(bSR,oTR)
cs.pop()
_(c6Q,bSR)
cs.push("./packageComponent/pages/form/picker/picker.wxml:view:38:8")
var xUR=_n('view')
_rz(z,xUR,'class',36,e,s,gg)
cs.push("./packageComponent/pages/form/picker/picker.wxml:view:39:10")
var oVR=_n('view')
_rz(z,oVR,'class',37,e,s,gg)
cs.push("./packageComponent/pages/form/picker/picker.wxml:view:40:12")
var fWR=_n('view')
_rz(z,fWR,'class',38,e,s,gg)
cs.push("./packageComponent/pages/form/picker/picker.wxml:view:41:14")
var cXR=_n('view')
_rz(z,cXR,'class',39,e,s,gg)
var hYR=_oz(z,40,e,s,gg)
_(cXR,hYR)
cs.pop()
_(fWR,cXR)
cs.pop()
_(oVR,fWR)
cs.push("./packageComponent/pages/form/picker/picker.wxml:view:43:12")
var oZR=_n('view')
_rz(z,oZR,'class',41,e,s,gg)
cs.push("./packageComponent/pages/form/picker/picker.wxml:picker:44:14")
var c1R=_mz(z,'picker',['bindchange',42,'end',1,'mode',2,'start',3,'value',4],[],e,s,gg)
cs.push("./packageComponent/pages/form/picker/picker.wxml:view:45:16")
var o2R=_n('view')
_rz(z,o2R,'class',47,e,s,gg)
var l3R=_oz(z,48,e,s,gg)
_(o2R,l3R)
cs.pop()
_(c1R,o2R)
cs.pop()
_(oZR,c1R)
cs.pop()
_(oVR,oZR)
cs.pop()
_(xUR,oVR)
cs.pop()
_(c6Q,xUR)
cs.pop()
_(f5Q,c6Q)
cs.pop()
_(eZQ,f5Q)
var a4R=_v()
_(eZQ,a4R)
cs.push("./packageComponent/pages/form/picker/picker.wxml:template:53:4")
var t5R=_oz(z,49,e,s,gg)
var e6R=_gd(x[19],t5R,e_,d_)
if(e6R){
var b7R={}
var cur_globalf=gg.f
a4R.wxXCkey=3
e6R(b7R,b7R,a4R,gg)
gg.f=cur_globalf
}
else _w(t5R,x[19],53,16)
cs.pop()
cs.pop()
_(r,eZQ)
tYQ.pop()
tYQ.pop()
return r
}
e_[x[19]]={f:m17,j:[],i:[],ti:[x[5],x[6]],ic:[]}
d_[x[20]]={}
var m18=function(e,s,r,gg){
var z=gz$7061636b616765436f6d706f6e656e742f_19()
var x9R=e_[x[20]].i
_ai(x9R,x[5],e_,x[20],1,1)
_ai(x9R,x[6],e_,x[20],2,2)
cs.push("./packageComponent/pages/form/radio/radio.wxml:view:4:2")
var o0R=_mz(z,'view',['class',0,'data-weui-theme',1],[],e,s,gg)
var fAS=_v()
_(o0R,fAS)
cs.push("./packageComponent/pages/form/radio/radio.wxml:template:5:4")
var cBS=_oz(z,3,e,s,gg)
var hCS=_gd(x[20],cBS,e_,d_)
if(hCS){
var oDS=_1z(z,2,e,s,gg) || {}
var cur_globalf=gg.f
fAS.wxXCkey=3
hCS(oDS,oDS,fAS,gg)
gg.f=cur_globalf
}
else _w(cBS,x[20],5,16)
cs.pop()
cs.push("./packageComponent/pages/form/radio/radio.wxml:view:7:4")
var cES=_n('view')
_rz(z,cES,'class',4,e,s,gg)
cs.push("./packageComponent/pages/form/radio/radio.wxml:view:8:6")
var oFS=_n('view')
_rz(z,oFS,'class',5,e,s,gg)
cs.push("./packageComponent/pages/form/radio/radio.wxml:view:9:8")
var lGS=_n('view')
_rz(z,lGS,'class',6,e,s,gg)
var aHS=_oz(z,7,e,s,gg)
_(lGS,aHS)
cs.pop()
_(oFS,lGS)
cs.push("./packageComponent/pages/form/radio/radio.wxml:label:10:8")
var tIS=_n('label')
_rz(z,tIS,'class',8,e,s,gg)
cs.push("./packageComponent/pages/form/radio/radio.wxml:radio:11:10")
var eJS=_mz(z,'radio',['checked',9,'value',1],[],e,s,gg)
cs.pop()
_(tIS,eJS)
var bKS=_oz(z,11,e,s,gg)
_(tIS,bKS)
cs.pop()
_(oFS,tIS)
cs.push("./packageComponent/pages/form/radio/radio.wxml:label:13:8")
var oLS=_n('label')
_rz(z,oLS,'class',12,e,s,gg)
cs.push("./packageComponent/pages/form/radio/radio.wxml:radio:14:10")
var xMS=_n('radio')
_rz(z,xMS,'value',13,e,s,gg)
cs.pop()
_(oLS,xMS)
var oNS=_oz(z,14,e,s,gg)
_(oLS,oNS)
cs.pop()
_(oFS,oLS)
cs.pop()
_(cES,oFS)
cs.push("./packageComponent/pages/form/radio/radio.wxml:view:19:6")
var fOS=_n('view')
_rz(z,fOS,'class',15,e,s,gg)
cs.push("./packageComponent/pages/form/radio/radio.wxml:view:20:8")
var cPS=_n('view')
_rz(z,cPS,'class',16,e,s,gg)
var hQS=_oz(z,17,e,s,gg)
_(cPS,hQS)
cs.pop()
_(fOS,cPS)
cs.push("./packageComponent/pages/form/radio/radio.wxml:view:21:8")
var oRS=_n('view')
_rz(z,oRS,'class',18,e,s,gg)
cs.push("./packageComponent/pages/form/radio/radio.wxml:radio-group:22:10")
var cSS=_n('radio-group')
_rz(z,cSS,'bindchange',19,e,s,gg)
var oTS=_v()
_(cSS,oTS)
cs.push("./packageComponent/pages/form/radio/radio.wxml:label:23:12")
var lUS=function(tWS,aVS,eXS,gg){
cs.push("./packageComponent/pages/form/radio/radio.wxml:label:23:12")
var oZS=_n('label')
_rz(z,oZS,'class',22,tWS,aVS,gg)
cs.push("./packageComponent/pages/form/radio/radio.wxml:view:25:14")
var x1S=_n('view')
_rz(z,x1S,'class',23,tWS,aVS,gg)
cs.push("./packageComponent/pages/form/radio/radio.wxml:radio:26:16")
var o2S=_mz(z,'radio',['checked',24,'value',1],[],tWS,aVS,gg)
cs.pop()
_(x1S,o2S)
cs.pop()
_(oZS,x1S)
cs.push("./packageComponent/pages/form/radio/radio.wxml:view:28:14")
var f3S=_n('view')
_rz(z,f3S,'class',26,tWS,aVS,gg)
var c4S=_oz(z,27,tWS,aVS,gg)
_(f3S,c4S)
cs.pop()
_(oZS,f3S)
cs.pop()
_(eXS,oZS)
return eXS
}
_wp('./packageComponent/pages/form/radio/radio.wxml:label:23:12: wx:key="{{item.value}}" does not look like a valid key name (did you mean wx:key="value" ?)')
oTS.wxXCkey=2
_2z(z,20,lUS,e,s,gg,oTS,'item','index','{{item.value}}')
cs.pop()
cs.pop()
_(oRS,cSS)
cs.pop()
_(fOS,oRS)
cs.pop()
_(cES,fOS)
cs.pop()
_(o0R,cES)
var h5S=_v()
_(o0R,h5S)
cs.push("./packageComponent/pages/form/radio/radio.wxml:template:35:4")
var o6S=_oz(z,28,e,s,gg)
var c7S=_gd(x[20],o6S,e_,d_)
if(c7S){
var o8S={}
var cur_globalf=gg.f
h5S.wxXCkey=3
c7S(o8S,o8S,h5S,gg)
gg.f=cur_globalf
}
else _w(o6S,x[20],35,16)
cs.pop()
cs.pop()
_(r,o0R)
x9R.pop()
x9R.pop()
return r
}
e_[x[20]]={f:m18,j:[],i:[],ti:[x[5],x[6]],ic:[]}
d_[x[21]]={}
var m19=function(e,s,r,gg){
var z=gz$7061636b616765436f6d706f6e656e742f_20()
var a0S=e_[x[21]].i
_ai(a0S,x[5],e_,x[21],1,1)
_ai(a0S,x[6],e_,x[21],2,2)
cs.push("./packageComponent/pages/form/slider/slider.wxml:view:4:2")
var tAT=_mz(z,'view',['class',0,'data-weui-theme',1],[],e,s,gg)
var eBT=_v()
_(tAT,eBT)
cs.push("./packageComponent/pages/form/slider/slider.wxml:template:5:4")
var bCT=_oz(z,3,e,s,gg)
var oDT=_gd(x[21],bCT,e_,d_)
if(oDT){
var xET=_1z(z,2,e,s,gg) || {}
var cur_globalf=gg.f
eBT.wxXCkey=3
oDT(xET,xET,eBT,gg)
gg.f=cur_globalf
}
else _w(bCT,x[21],5,16)
cs.pop()
cs.push("./packageComponent/pages/form/slider/slider.wxml:view:7:4")
var oFT=_n('view')
_rz(z,oFT,'class',4,e,s,gg)
cs.push("./packageComponent/pages/form/slider/slider.wxml:view:8:6")
var fGT=_n('view')
_rz(z,fGT,'class',5,e,s,gg)
cs.push("./packageComponent/pages/form/slider/slider.wxml:view:9:8")
var cHT=_n('view')
_rz(z,cHT,'class',6,e,s,gg)
var hIT=_oz(z,7,e,s,gg)
_(cHT,hIT)
cs.pop()
_(fGT,cHT)
cs.push("./packageComponent/pages/form/slider/slider.wxml:view:10:8")
var oJT=_n('view')
_rz(z,oJT,'class',8,e,s,gg)
cs.push("./packageComponent/pages/form/slider/slider.wxml:slider:11:10")
var cKT=_mz(z,'slider',['bindchange',9,'step',1,'value',2],[],e,s,gg)
cs.pop()
_(oJT,cKT)
cs.pop()
_(fGT,oJT)
cs.pop()
_(oFT,fGT)
cs.push("./packageComponent/pages/form/slider/slider.wxml:view:15:6")
var oLT=_n('view')
_rz(z,oLT,'class',12,e,s,gg)
cs.push("./packageComponent/pages/form/slider/slider.wxml:view:16:8")
var lMT=_n('view')
_rz(z,lMT,'class',13,e,s,gg)
var aNT=_oz(z,14,e,s,gg)
_(lMT,aNT)
cs.pop()
_(oLT,lMT)
cs.push("./packageComponent/pages/form/slider/slider.wxml:view:17:8")
var tOT=_n('view')
_rz(z,tOT,'class',15,e,s,gg)
cs.push("./packageComponent/pages/form/slider/slider.wxml:slider:18:10")
var ePT=_mz(z,'slider',['showValue',-1,'bindchange',16,'value',1],[],e,s,gg)
cs.pop()
_(tOT,ePT)
cs.pop()
_(oLT,tOT)
cs.pop()
_(oFT,oLT)
cs.push("./packageComponent/pages/form/slider/slider.wxml:view:22:6")
var bQT=_n('view')
_rz(z,bQT,'class',18,e,s,gg)
cs.push("./packageComponent/pages/form/slider/slider.wxml:view:23:8")
var oRT=_n('view')
_rz(z,oRT,'class',19,e,s,gg)
var xST=_oz(z,20,e,s,gg)
_(oRT,xST)
cs.pop()
_(bQT,oRT)
cs.push("./packageComponent/pages/form/slider/slider.wxml:view:24:8")
var oTT=_n('view')
_rz(z,oTT,'class',21,e,s,gg)
cs.push("./packageComponent/pages/form/slider/slider.wxml:slider:25:10")
var fUT=_mz(z,'slider',['showValue',-1,'bindchange',22,'max',1,'min',2,'value',3],[],e,s,gg)
cs.pop()
_(oTT,fUT)
cs.pop()
_(bQT,oTT)
cs.pop()
_(oFT,bQT)
cs.pop()
_(tAT,oFT)
var cVT=_v()
_(tAT,cVT)
cs.push("./packageComponent/pages/form/slider/slider.wxml:template:30:4")
var hWT=_oz(z,26,e,s,gg)
var oXT=_gd(x[21],hWT,e_,d_)
if(oXT){
var cYT={}
var cur_globalf=gg.f
cVT.wxXCkey=3
oXT(cYT,cYT,cVT,gg)
gg.f=cur_globalf
}
else _w(hWT,x[21],30,16)
cs.pop()
cs.pop()
_(r,tAT)
a0S.pop()
a0S.pop()
return r
}
e_[x[21]]={f:m19,j:[],i:[],ti:[x[5],x[6]],ic:[]}
d_[x[22]]={}
var m20=function(e,s,r,gg){
var z=gz$7061636b616765436f6d706f6e656e742f_21()
var l1T=e_[x[22]].i
_ai(l1T,x[5],e_,x[22],1,1)
_ai(l1T,x[6],e_,x[22],2,2)
cs.push("./packageComponent/pages/form/switch/switch.wxml:view:4:2")
var a2T=_mz(z,'view',['class',0,'data-weui-theme',1],[],e,s,gg)
var t3T=_v()
_(a2T,t3T)
cs.push("./packageComponent/pages/form/switch/switch.wxml:template:5:4")
var e4T=_oz(z,3,e,s,gg)
var b5T=_gd(x[22],e4T,e_,d_)
if(b5T){
var o6T=_1z(z,2,e,s,gg) || {}
var cur_globalf=gg.f
t3T.wxXCkey=3
b5T(o6T,o6T,t3T,gg)
gg.f=cur_globalf
}
else _w(e4T,x[22],5,16)
cs.pop()
cs.push("./packageComponent/pages/form/switch/switch.wxml:view:7:4")
var x7T=_n('view')
_rz(z,x7T,'class',4,e,s,gg)
cs.push("./packageComponent/pages/form/switch/switch.wxml:view:8:6")
var o8T=_n('view')
_rz(z,o8T,'class',5,e,s,gg)
cs.push("./packageComponent/pages/form/switch/switch.wxml:view:9:8")
var f9T=_n('view')
_rz(z,f9T,'class',6,e,s,gg)
var c0T=_oz(z,7,e,s,gg)
_(f9T,c0T)
cs.pop()
_(o8T,f9T)
cs.push("./packageComponent/pages/form/switch/switch.wxml:view:10:8")
var hAU=_n('view')
_rz(z,hAU,'class',8,e,s,gg)
cs.push("./packageComponent/pages/form/switch/switch.wxml:switch:11:10")
var oBU=_mz(z,'switch',['checked',-1,'bindchange',9],[],e,s,gg)
cs.pop()
_(hAU,oBU)
cs.push("./packageComponent/pages/form/switch/switch.wxml:switch:12:10")
var cCU=_n('switch')
_rz(z,cCU,'bindchange',10,e,s,gg)
cs.pop()
_(hAU,cCU)
cs.pop()
_(o8T,hAU)
cs.pop()
_(x7T,o8T)
cs.push("./packageComponent/pages/form/switch/switch.wxml:view:16:6")
var oDU=_n('view')
_rz(z,oDU,'class',11,e,s,gg)
cs.push("./packageComponent/pages/form/switch/switch.wxml:view:17:8")
var lEU=_n('view')
_rz(z,lEU,'class',12,e,s,gg)
var aFU=_oz(z,13,e,s,gg)
_(lEU,aFU)
cs.pop()
_(oDU,lEU)
cs.push("./packageComponent/pages/form/switch/switch.wxml:view:18:8")
var tGU=_n('view')
_rz(z,tGU,'class',14,e,s,gg)
cs.push("./packageComponent/pages/form/switch/switch.wxml:view:19:10")
var eHU=_n('view')
_rz(z,eHU,'class',15,e,s,gg)
cs.push("./packageComponent/pages/form/switch/switch.wxml:view:20:12")
var bIU=_n('view')
_rz(z,bIU,'class',16,e,s,gg)
var oJU=_oz(z,17,e,s,gg)
_(bIU,oJU)
cs.pop()
_(eHU,bIU)
cs.push("./packageComponent/pages/form/switch/switch.wxml:view:21:12")
var xKU=_n('view')
_rz(z,xKU,'class',18,e,s,gg)
cs.push("./packageComponent/pages/form/switch/switch.wxml:switch:22:14")
var oLU=_n('switch')
oLU.attr['checked']=true
cs.pop()
_(xKU,oLU)
cs.pop()
_(eHU,xKU)
cs.pop()
_(tGU,eHU)
cs.push("./packageComponent/pages/form/switch/switch.wxml:view:25:10")
var fMU=_n('view')
_rz(z,fMU,'class',19,e,s,gg)
cs.push("./packageComponent/pages/form/switch/switch.wxml:view:26:12")
var cNU=_n('view')
_rz(z,cNU,'class',20,e,s,gg)
var hOU=_oz(z,21,e,s,gg)
_(cNU,hOU)
cs.pop()
_(fMU,cNU)
cs.push("./packageComponent/pages/form/switch/switch.wxml:view:27:12")
var oPU=_n('view')
_rz(z,oPU,'class',22,e,s,gg)
cs.push("./packageComponent/pages/form/switch/switch.wxml:switch:28:14")
var cQU=_n('switch')
cs.pop()
_(oPU,cQU)
cs.pop()
_(fMU,oPU)
cs.pop()
_(tGU,fMU)
cs.pop()
_(oDU,tGU)
cs.pop()
_(x7T,oDU)
cs.pop()
_(a2T,x7T)
var oRU=_v()
_(a2T,oRU)
cs.push("./packageComponent/pages/form/switch/switch.wxml:template:35:4")
var lSU=_oz(z,23,e,s,gg)
var aTU=_gd(x[22],lSU,e_,d_)
if(aTU){
var tUU={}
var cur_globalf=gg.f
oRU.wxXCkey=3
aTU(tUU,tUU,oRU,gg)
gg.f=cur_globalf
}
else _w(lSU,x[22],35,16)
cs.pop()
cs.pop()
_(r,a2T)
l1T.pop()
l1T.pop()
return r
}
e_[x[22]]={f:m20,j:[],i:[],ti:[x[5],x[6]],ic:[]}
d_[x[23]]={}
var m21=function(e,s,r,gg){
var z=gz$7061636b616765436f6d706f6e656e742f_22()
var bWU=e_[x[23]].i
_ai(bWU,x[5],e_,x[23],1,1)
_ai(bWU,x[6],e_,x[23],2,2)
cs.push("./packageComponent/pages/form/textarea/textarea.wxml:view:4:2")
var oXU=_mz(z,'view',['class',0,'data-weui-theme',1],[],e,s,gg)
var xYU=_v()
_(oXU,xYU)
cs.push("./packageComponent/pages/form/textarea/textarea.wxml:template:5:4")
var oZU=_oz(z,3,e,s,gg)
var f1U=_gd(x[23],oZU,e_,d_)
if(f1U){
var c2U=_1z(z,2,e,s,gg) || {}
var cur_globalf=gg.f
xYU.wxXCkey=3
f1U(c2U,c2U,xYU,gg)
gg.f=cur_globalf
}
else _w(oZU,x[23],5,16)
cs.pop()
cs.push("./packageComponent/pages/form/textarea/textarea.wxml:view:7:4")
var h3U=_n('view')
_rz(z,h3U,'class',4,e,s,gg)
cs.push("./packageComponent/pages/form/textarea/textarea.wxml:view:8:6")
var o4U=_n('view')
_rz(z,o4U,'class',5,e,s,gg)
cs.push("./packageComponent/pages/form/textarea/textarea.wxml:view:9:8")
var c5U=_n('view')
_rz(z,c5U,'class',6,e,s,gg)
var o6U=_oz(z,7,e,s,gg)
_(c5U,o6U)
cs.pop()
_(o4U,c5U)
cs.push("./packageComponent/pages/form/textarea/textarea.wxml:view:10:8")
var l7U=_n('view')
_rz(z,l7U,'class',8,e,s,gg)
cs.push("./packageComponent/pages/form/textarea/textarea.wxml:textarea:11:10")
var a8U=_mz(z,'textarea',['autoHeight',-1,'bindblur',9],[],e,s,gg)
cs.pop()
_(l7U,a8U)
cs.pop()
_(o4U,l7U)
cs.pop()
_(h3U,o4U)
cs.push("./packageComponent/pages/form/textarea/textarea.wxml:view:15:6")
var t9U=_n('view')
_rz(z,t9U,'class',10,e,s,gg)
cs.push("./packageComponent/pages/form/textarea/textarea.wxml:view:16:8")
var e0U=_n('view')
_rz(z,e0U,'class',11,e,s,gg)
var bAV=_oz(z,12,e,s,gg)
_(e0U,bAV)
cs.pop()
_(t9U,e0U)
cs.push("./packageComponent/pages/form/textarea/textarea.wxml:view:17:8")
var oBV=_n('view')
_rz(z,oBV,'class',13,e,s,gg)
cs.push("./packageComponent/pages/form/textarea/textarea.wxml:textarea:18:10")
var xCV=_mz(z,'textarea',['autoFocus',14,'style',1],[],e,s,gg)
cs.pop()
_(oBV,xCV)
cs.pop()
_(t9U,oBV)
cs.pop()
_(h3U,t9U)
cs.pop()
_(oXU,h3U)
var oDV=_v()
_(oXU,oDV)
cs.push("./packageComponent/pages/form/textarea/textarea.wxml:template:23:4")
var fEV=_oz(z,16,e,s,gg)
var cFV=_gd(x[23],fEV,e_,d_)
if(cFV){
var hGV={}
var cur_globalf=gg.f
oDV.wxXCkey=3
cFV(hGV,hGV,oDV,gg)
gg.f=cur_globalf
}
else _w(fEV,x[23],23,16)
cs.pop()
cs.pop()
_(r,oXU)
bWU.pop()
bWU.pop()
return r
}
e_[x[23]]={f:m21,j:[],i:[],ti:[x[5],x[6]],ic:[]}
d_[x[24]]={}
var m22=function(e,s,r,gg){
var z=gz$7061636b616765436f6d706f6e656e742f_23()
var cIV=e_[x[24]].i
_ai(cIV,x[5],e_,x[24],1,1)
_ai(cIV,x[6],e_,x[24],2,2)
cs.push("./packageComponent/pages/map/map/map.wxml:view:4:2")
var oJV=_mz(z,'view',['class',0,'data-weui-theme',1],[],e,s,gg)
var lKV=_v()
_(oJV,lKV)
cs.push("./packageComponent/pages/map/map/map.wxml:template:5:4")
var aLV=_oz(z,3,e,s,gg)
var tMV=_gd(x[24],aLV,e_,d_)
if(tMV){
var eNV=_1z(z,2,e,s,gg) || {}
var cur_globalf=gg.f
lKV.wxXCkey=3
tMV(eNV,eNV,lKV,gg)
gg.f=cur_globalf
}
else _w(aLV,x[24],5,16)
cs.pop()
cs.push("./packageComponent/pages/map/map/map.wxml:view:7:4")
var bOV=_n('view')
_rz(z,bOV,'class',4,e,s,gg)
cs.push("./packageComponent/pages/map/map/map.wxml:view:8:6")
var oPV=_n('view')
_rz(z,oPV,'class',5,e,s,gg)
var xQV=_oz(z,6,e,s,gg)
_(oPV,xQV)
cs.push("./packageComponent/pages/map/map/map.wxml:navigator:8:87")
var oRV=_mz(z,'navigator',['class',7,'url',1],[],e,s,gg)
var fSV=_oz(z,9,e,s,gg)
_(oRV,fSV)
cs.pop()
_(oPV,oRV)
var cTV=_oz(z,10,e,s,gg)
_(oPV,cTV)
cs.pop()
_(bOV,oPV)
cs.push("./packageComponent/pages/map/map/map.wxml:view:9:6")
var hUV=_n('view')
_rz(z,hUV,'class',11,e,s,gg)
cs.push("./packageComponent/pages/map/map/map.wxml:map:10:8")
var oVV=_mz(z,'map',['enable3D',12,'enableOverlooking',1,'enableRotate',2,'enableSatellite',3,'enableScroll',4,'enableTraffic',5,'enableZoom',6,'latitude',7,'longitude',8,'markers',9,'polygons',10,'scale',11,'showCompass',12,'style',13,'subkey',14],[],e,s,gg)
cs.pop()
_(hUV,oVV)
cs.pop()
_(bOV,hUV)
cs.pop()
_(oJV,bOV)
cs.push("./packageComponent/pages/map/map/map.wxml:view:31:4")
var cWV=_n('view')
_rz(z,cWV,'class',27,e,s,gg)
cs.push("./packageComponent/pages/map/map/map.wxml:view:32:6")
var oXV=_n('view')
_rz(z,oXV,'class',28,e,s,gg)
cs.push("./packageComponent/pages/map/map/map.wxml:button:33:8")
var lYV=_mz(z,'button',['bindtap',29,'type',1],[],e,s,gg)
var aZV=_oz(z,31,e,s,gg)
_(lYV,aZV)
cs.pop()
_(oXV,lYV)
cs.push("./packageComponent/pages/map/map/map.wxml:button:36:8")
var t1V=_mz(z,'button',['bindtap',32,'type',1],[],e,s,gg)
var e2V=_oz(z,34,e,s,gg)
_(t1V,e2V)
cs.pop()
_(oXV,t1V)
cs.push("./packageComponent/pages/map/map/map.wxml:button:39:8")
var b3V=_mz(z,'button',['bindtap',35,'type',1],[],e,s,gg)
var o4V=_oz(z,37,e,s,gg)
_(b3V,o4V)
cs.pop()
_(oXV,b3V)
cs.push("./packageComponent/pages/map/map/map.wxml:button:42:8")
var x5V=_mz(z,'button',['bindtap',38,'type',1],[],e,s,gg)
var o6V=_oz(z,40,e,s,gg)
_(x5V,o6V)
cs.pop()
_(oXV,x5V)
cs.push("./packageComponent/pages/map/map/map.wxml:button:45:8")
var f7V=_mz(z,'button',['bindtap',41,'type',1],[],e,s,gg)
var c8V=_oz(z,43,e,s,gg)
_(f7V,c8V)
cs.pop()
_(oXV,f7V)
cs.push("./packageComponent/pages/map/map/map.wxml:button:48:8")
var h9V=_mz(z,'button',['bindtap',44,'type',1],[],e,s,gg)
var o0V=_oz(z,46,e,s,gg)
_(h9V,o0V)
cs.pop()
_(oXV,h9V)
cs.push("./packageComponent/pages/map/map/map.wxml:button:51:8")
var cAW=_mz(z,'button',['bindtap',47,'type',1],[],e,s,gg)
var oBW=_oz(z,49,e,s,gg)
_(cAW,oBW)
cs.pop()
_(oXV,cAW)
cs.push("./packageComponent/pages/map/map/map.wxml:button:54:9")
var lCW=_mz(z,'button',['bindtap',50,'type',1],[],e,s,gg)
var aDW=_oz(z,52,e,s,gg)
_(lCW,aDW)
cs.pop()
_(oXV,lCW)
cs.push("./packageComponent/pages/map/map/map.wxml:button:57:9")
var tEW=_mz(z,'button',['bindtap',53,'type',1],[],e,s,gg)
var eFW=_oz(z,55,e,s,gg)
_(tEW,eFW)
cs.pop()
_(oXV,tEW)
cs.pop()
_(cWV,oXV)
cs.pop()
_(oJV,cWV)
var bGW=_v()
_(oJV,bGW)
cs.push("./packageComponent/pages/map/map/map.wxml:template:63:4")
var oHW=_oz(z,56,e,s,gg)
var xIW=_gd(x[24],oHW,e_,d_)
if(xIW){
var oJW={}
var cur_globalf=gg.f
bGW.wxXCkey=3
xIW(oJW,oJW,bGW,gg)
gg.f=cur_globalf
}
else _w(oHW,x[24],63,16)
cs.pop()
cs.pop()
_(r,oJV)
cIV.pop()
cIV.pop()
return r
}
e_[x[24]]={f:m22,j:[],i:[],ti:[x[5],x[6]],ic:[]}
d_[x[25]]={}
var m23=function(e,s,r,gg){
var z=gz$7061636b616765436f6d706f6e656e742f_24()
var cLW=e_[x[25]].i
_ai(cLW,x[5],e_,x[25],1,1)
_ai(cLW,x[6],e_,x[25],2,2)
cs.push("./packageComponent/pages/media/camera/camera.wxml:view:4:2")
var hMW=_mz(z,'view',['class',0,'data-weui-theme',1],[],e,s,gg)
var oNW=_v()
_(hMW,oNW)
cs.push("./packageComponent/pages/media/camera/camera.wxml:template:5:4")
var cOW=_oz(z,3,e,s,gg)
var oPW=_gd(x[25],cOW,e_,d_)
if(oPW){
var lQW=_1z(z,2,e,s,gg) || {}
var cur_globalf=gg.f
oNW.wxXCkey=3
oPW(lQW,lQW,oNW,gg)
gg.f=cur_globalf
}
else _w(cOW,x[25],5,16)
cs.pop()
cs.push("./packageComponent/pages/media/camera/camera.wxml:view:7:4")
var aRW=_n('view')
_rz(z,aRW,'class',4,e,s,gg)
cs.push("./packageComponent/pages/media/camera/camera.wxml:view:8:6")
var tSW=_n('view')
_rz(z,tSW,'class',5,e,s,gg)
cs.push("./packageComponent/pages/media/camera/camera.wxml:view:9:6")
var xWW=_n('view')
_rz(z,xWW,'style',6,e,s,gg)
var oXW=_oz(z,7,e,s,gg)
_(xWW,oXW)
cs.pop()
_(tSW,xWW)
cs.push("./packageComponent/pages/media/camera/camera.wxml:camera:10:8")
var fYW=_mz(z,'camera',['binderror',8,'devicePosition',1,'flash',2],[],e,s,gg)
cs.pop()
_(tSW,fYW)
var eTW=_v()
_(tSW,eTW)
if(_oz(z,11,e,s,gg)){eTW.wxVkey=1
cs.push("./packageComponent/pages/media/camera/camera.wxml:view:16:9")
cs.push("./packageComponent/pages/media/camera/camera.wxml:view:16:9")
var cZW=_n('view')
_rz(z,cZW,'class',12,e,s,gg)
cs.push("./packageComponent/pages/media/camera/camera.wxml:view:17:12")
var h1W=_n('view')
_rz(z,h1W,'style',13,e,s,gg)
var o2W=_oz(z,14,e,s,gg)
_(h1W,o2W)
cs.pop()
_(cZW,h1W)
cs.push("./packageComponent/pages/media/camera/camera.wxml:view:18:12")
var c3W=_n('view')
var o4W=_oz(z,15,e,s,gg)
_(c3W,o4W)
cs.pop()
_(cZW,c3W)
cs.push("./packageComponent/pages/media/camera/camera.wxml:canvas:21:12")
var l5W=_mz(z,'canvas',['canvasId',16,'id',1,'style',2,'type',3],[],e,s,gg)
cs.pop()
_(cZW,l5W)
cs.pop()
_(eTW,cZW)
cs.pop()
}
cs.push("./packageComponent/pages/media/camera/camera.wxml:view:29:8")
var a6W=_n('view')
_rz(z,a6W,'class',20,e,s,gg)
cs.push("./packageComponent/pages/media/camera/camera.wxml:button:30:10")
var t7W=_mz(z,'button',['bindtap',21,'type',1],[],e,s,gg)
var e8W=_oz(z,23,e,s,gg)
_(t7W,e8W)
cs.pop()
_(a6W,t7W)
cs.pop()
_(tSW,a6W)
cs.push("./packageComponent/pages/media/camera/camera.wxml:view:32:8")
var b9W=_n('view')
_rz(z,b9W,'class',24,e,s,gg)
cs.push("./packageComponent/pages/media/camera/camera.wxml:button:33:8")
var o0W=_mz(z,'button',['bindtap',25,'type',1],[],e,s,gg)
var xAX=_oz(z,27,e,s,gg)
_(o0W,xAX)
cs.pop()
_(b9W,o0W)
cs.pop()
_(tSW,b9W)
cs.push("./packageComponent/pages/media/camera/camera.wxml:view:35:8")
var oBX=_n('view')
_rz(z,oBX,'class',28,e,s,gg)
cs.push("./packageComponent/pages/media/camera/camera.wxml:button:36:10")
var fCX=_mz(z,'button',['bindtap',29,'type',1],[],e,s,gg)
var cDX=_oz(z,31,e,s,gg)
_(fCX,cDX)
cs.pop()
_(oBX,fCX)
cs.pop()
_(tSW,oBX)
cs.push("./packageComponent/pages/media/camera/camera.wxml:view:38:8")
var hEX=_n('view')
_rz(z,hEX,'class',32,e,s,gg)
cs.push("./packageComponent/pages/media/camera/camera.wxml:button:39:10")
var oFX=_mz(z,'button',['bindtap',33,'type',1],[],e,s,gg)
var cGX=_oz(z,35,e,s,gg)
_(oFX,cGX)
cs.pop()
_(hEX,oFX)
cs.pop()
_(tSW,hEX)
cs.push("./packageComponent/pages/media/camera/camera.wxml:view:41:8")
var oHX=_n('view')
_rz(z,oHX,'class',36,e,s,gg)
cs.push("./packageComponent/pages/media/camera/camera.wxml:button:42:10")
var lIX=_mz(z,'button',['bindtap',37,'type',1],[],e,s,gg)
var aJX=_oz(z,39,e,s,gg)
_(lIX,aJX)
cs.pop()
_(oHX,lIX)
cs.pop()
_(tSW,oHX)
cs.push("./packageComponent/pages/media/camera/camera.wxml:view:44:8")
var tKX=_n('view')
_rz(z,tKX,'class',40,e,s,gg)
cs.push("./packageComponent/pages/media/camera/camera.wxml:navigator:45:10")
var eLX=_mz(z,'navigator',['hoverClass',41,'url',1],[],e,s,gg)
cs.push("./packageComponent/pages/media/camera/camera.wxml:button:46:12")
var bMX=_n('button')
_rz(z,bMX,'type',43,e,s,gg)
var oNX=_oz(z,44,e,s,gg)
_(bMX,oNX)
cs.pop()
_(eLX,bMX)
cs.pop()
_(tKX,eLX)
cs.pop()
_(tSW,tKX)
cs.push("./packageComponent/pages/media/camera/camera.wxml:view:49:8")
var xOX=_n('view')
_rz(z,xOX,'class',45,e,s,gg)
var oPX=_oz(z,46,e,s,gg)
_(xOX,oPX)
cs.pop()
_(tSW,xOX)
var bUW=_v()
_(tSW,bUW)
if(_oz(z,47,e,s,gg)){bUW.wxVkey=1
cs.push("./packageComponent/pages/media/camera/camera.wxml:image:50:8")
cs.push("./packageComponent/pages/media/camera/camera.wxml:image:50:8")
var fQX=_mz(z,'image',['class',48,'mode',1,'src',2],[],e,s,gg)
cs.pop()
_(bUW,fQX)
cs.pop()
}
var oVW=_v()
_(tSW,oVW)
if(_oz(z,51,e,s,gg)){oVW.wxVkey=1
cs.push("./packageComponent/pages/media/camera/camera.wxml:video:51:8")
cs.push("./packageComponent/pages/media/camera/camera.wxml:video:51:8")
var cRX=_mz(z,'video',['class',52,'src',1],[],e,s,gg)
cs.pop()
_(oVW,cRX)
cs.pop()
}
eTW.wxXCkey=1
bUW.wxXCkey=1
oVW.wxXCkey=1
cs.pop()
_(aRW,tSW)
cs.pop()
_(hMW,aRW)
var hSX=_v()
_(hMW,hSX)
cs.push("./packageComponent/pages/media/camera/camera.wxml:template:55:4")
var oTX=_oz(z,54,e,s,gg)
var cUX=_gd(x[25],oTX,e_,d_)
if(cUX){
var oVX={}
var cur_globalf=gg.f
hSX.wxXCkey=3
cUX(oVX,oVX,hSX,gg)
gg.f=cur_globalf
}
else _w(oTX,x[25],55,16)
cs.pop()
cs.pop()
_(r,hMW)
cLW.pop()
cLW.pop()
return r
}
e_[x[25]]={f:m23,j:[],i:[],ti:[x[5],x[6]],ic:[]}
d_[x[26]]={}
var m24=function(e,s,r,gg){
var z=gz$7061636b616765436f6d706f6e656e742f_25()
var aXX=e_[x[26]].i
_ai(aXX,x[5],e_,x[26],1,1)
_ai(aXX,x[6],e_,x[26],2,2)
cs.push("./packageComponent/pages/media/image/image.wxml:view:4:2")
var tYX=_mz(z,'view',['class',0,'data-weui-theme',1],[],e,s,gg)
var eZX=_v()
_(tYX,eZX)
cs.push("./packageComponent/pages/media/image/image.wxml:template:5:4")
var b1X=_oz(z,3,e,s,gg)
var o2X=_gd(x[26],b1X,e_,d_)
if(o2X){
var x3X=_1z(z,2,e,s,gg) || {}
var cur_globalf=gg.f
eZX.wxXCkey=3
o2X(x3X,x3X,eZX,gg)
gg.f=cur_globalf
}
else _w(b1X,x[26],5,16)
cs.pop()
cs.push("./packageComponent/pages/media/image/image.wxml:view:7:4")
var o4X=_n('view')
_rz(z,o4X,'class',4,e,s,gg)
cs.push("./packageComponent/pages/media/image/image.wxml:view:8:6")
var f5X=_n('view')
_rz(z,f5X,'class',5,e,s,gg)
cs.push("./packageComponent/pages/media/image/image.wxml:view:9:8")
var c6X=_n('view')
_rz(z,c6X,'class',6,e,s,gg)
var h7X=_oz(z,7,e,s,gg)
_(c6X,h7X)
cs.pop()
_(f5X,c6X)
cs.push("./packageComponent/pages/media/image/image.wxml:view:10:8")
var o8X=_n('view')
_rz(z,o8X,'class',8,e,s,gg)
cs.push("./packageComponent/pages/media/image/image.wxml:image:11:10")
var c9X=_mz(z,'image',['class',9,'src',1],[],e,s,gg)
cs.pop()
_(o8X,c9X)
cs.pop()
_(f5X,o8X)
cs.pop()
_(o4X,f5X)
cs.push("./packageComponent/pages/media/image/image.wxml:view:14:6")
var o0X=_n('view')
_rz(z,o0X,'class',11,e,s,gg)
cs.push("./packageComponent/pages/media/image/image.wxml:view:15:8")
var lAY=_n('view')
_rz(z,lAY,'class',12,e,s,gg)
var aBY=_oz(z,13,e,s,gg)
_(lAY,aBY)
cs.pop()
_(o0X,lAY)
cs.push("./packageComponent/pages/media/image/image.wxml:view:16:8")
var tCY=_n('view')
_rz(z,tCY,'class',14,e,s,gg)
cs.push("./packageComponent/pages/media/image/image.wxml:image:17:10")
var eDY=_mz(z,'image',['class',15,'src',1],[],e,s,gg)
cs.pop()
_(tCY,eDY)
cs.pop()
_(o0X,tCY)
cs.pop()
_(o4X,o0X)
cs.push("./packageComponent/pages/media/image/image.wxml:view:20:7")
var bEY=_n('view')
_rz(z,bEY,'class',17,e,s,gg)
cs.push("./packageComponent/pages/media/image/image.wxml:view:21:8")
var oFY=_n('view')
_rz(z,oFY,'class',18,e,s,gg)
var xGY=_oz(z,19,e,s,gg)
_(oFY,xGY)
cs.pop()
_(bEY,oFY)
cs.push("./packageComponent/pages/media/image/image.wxml:view:22:8")
var oHY=_n('view')
_rz(z,oHY,'class',20,e,s,gg)
cs.push("./packageComponent/pages/media/image/image.wxml:image:23:10")
var fIY=_mz(z,'image',['webp',-1,'class',21,'mode',1,'src',2],[],e,s,gg)
cs.pop()
_(oHY,fIY)
cs.pop()
_(bEY,oHY)
cs.pop()
_(o4X,bEY)
cs.pop()
_(tYX,o4X)
var cJY=_v()
_(tYX,cJY)
cs.push("./packageComponent/pages/media/image/image.wxml:template:28:4")
var hKY=_oz(z,24,e,s,gg)
var oLY=_gd(x[26],hKY,e_,d_)
if(oLY){
var cMY={}
var cur_globalf=gg.f
cJY.wxXCkey=3
oLY(cMY,cMY,cJY,gg)
gg.f=cur_globalf
}
else _w(hKY,x[26],28,16)
cs.pop()
cs.pop()
_(r,tYX)
aXX.pop()
aXX.pop()
return r
}
e_[x[26]]={f:m24,j:[],i:[],ti:[x[5],x[6]],ic:[]}
d_[x[27]]={}
var m25=function(e,s,r,gg){
var z=gz$7061636b616765436f6d706f6e656e742f_26()
var lOY=e_[x[27]].i
_ai(lOY,x[5],e_,x[27],1,2)
_ai(lOY,x[6],e_,x[27],2,2)
cs.push("./packageComponent/pages/media/live-player/live-player.wxml:view:4:2")
var aPY=_mz(z,'view',['class',0,'data-weui-theme',1],[],e,s,gg)
var tQY=_v()
_(aPY,tQY)
cs.push("./packageComponent/pages/media/live-player/live-player.wxml:template:5:4")
var eRY=_oz(z,3,e,s,gg)
var bSY=_gd(x[27],eRY,e_,d_)
if(bSY){
var oTY=_1z(z,2,e,s,gg) || {}
var cur_globalf=gg.f
tQY.wxXCkey=3
bSY(oTY,oTY,tQY,gg)
gg.f=cur_globalf
}
else _w(eRY,x[27],5,16)
cs.pop()
cs.push("./packageComponent/pages/media/live-player/live-player.wxml:view:7:4")
var xUY=_n('view')
_rz(z,xUY,'class',4,e,s,gg)
cs.push("./packageComponent/pages/media/live-player/live-player.wxml:view:9:6")
var oVY=_n('view')
_rz(z,oVY,'class',5,e,s,gg)
cs.push("./packageComponent/pages/media/live-player/live-player.wxml:live-player:10:8")
var fWY=_mz(z,'live-player',['autoplay',-1,'binderror',6,'bindstatechange',1,'id',2,'mode',3,'src',4],[],e,s,gg)
cs.pop()
_(oVY,fWY)
cs.pop()
_(xUY,oVY)
cs.push("./packageComponent/pages/media/live-player/live-player.wxml:view:13:6")
var cXY=_n('view')
_rz(z,cXY,'class',11,e,s,gg)
cs.push("./packageComponent/pages/media/live-player/live-player.wxml:view:14:8")
var hYY=_n('view')
_rz(z,hYY,'class',12,e,s,gg)
var oZY=_oz(z,13,e,s,gg)
_(hYY,oZY)
cs.pop()
_(cXY,hYY)
cs.push("./packageComponent/pages/media/live-player/live-player.wxml:input:15:8")
var c1Y=_mz(z,'input',['bindinput',14,'class',1,'name',2,'placeholder',3,'value',4],[],e,s,gg)
cs.pop()
_(cXY,c1Y)
cs.push("./packageComponent/pages/media/live-player/live-player.wxml:button:16:8")
var o2Y=_mz(z,'button',['bindtap',19,'type',1],[],e,s,gg)
var l3Y=_oz(z,21,e,s,gg)
_(o2Y,l3Y)
cs.pop()
_(cXY,o2Y)
cs.pop()
_(xUY,cXY)
cs.push("./packageComponent/pages/media/live-player/live-player.wxml:view:20:6")
var a4Y=_n('view')
_rz(z,a4Y,'class',22,e,s,gg)
cs.push("./packageComponent/pages/media/live-player/live-player.wxml:button:21:8")
var t5Y=_mz(z,'button',['bindtap',23,'class',1,'type',2],[],e,s,gg)
var e6Y=_oz(z,26,e,s,gg)
_(t5Y,e6Y)
cs.pop()
_(a4Y,t5Y)
cs.push("./packageComponent/pages/media/live-player/live-player.wxml:button:22:8")
var b7Y=_mz(z,'button',['bindtap',27,'class',1,'type',2],[],e,s,gg)
var o8Y=_oz(z,30,e,s,gg)
_(b7Y,o8Y)
cs.pop()
_(a4Y,b7Y)
cs.push("./packageComponent/pages/media/live-player/live-player.wxml:button:23:8")
var x9Y=_mz(z,'button',['bindtap',31,'class',1,'type',2],[],e,s,gg)
var o0Y=_oz(z,34,e,s,gg)
_(x9Y,o0Y)
cs.pop()
_(a4Y,x9Y)
cs.push("./packageComponent/pages/media/live-player/live-player.wxml:button:24:8")
var fAZ=_mz(z,'button',['bindtap',35,'class',1,'type',2],[],e,s,gg)
var cBZ=_oz(z,38,e,s,gg)
_(fAZ,cBZ)
cs.pop()
_(a4Y,fAZ)
cs.push("./packageComponent/pages/media/live-player/live-player.wxml:button:25:8")
var hCZ=_mz(z,'button',['bindtap',39,'class',1,'type',2],[],e,s,gg)
var oDZ=_oz(z,42,e,s,gg)
_(hCZ,oDZ)
cs.pop()
_(a4Y,hCZ)
cs.pop()
_(xUY,a4Y)
cs.pop()
_(aPY,xUY)
var cEZ=_v()
_(aPY,cEZ)
cs.push("./packageComponent/pages/media/live-player/live-player.wxml:template:28:4")
var oFZ=_oz(z,43,e,s,gg)
var lGZ=_gd(x[27],oFZ,e_,d_)
if(lGZ){
var aHZ={}
var cur_globalf=gg.f
cEZ.wxXCkey=3
lGZ(aHZ,aHZ,cEZ,gg)
gg.f=cur_globalf
}
else _w(oFZ,x[27],28,16)
cs.pop()
cs.pop()
_(r,aPY)
lOY.pop()
lOY.pop()
return r
}
e_[x[27]]={f:m25,j:[],i:[],ti:[x[5],x[6]],ic:[]}
d_[x[28]]={}
var m26=function(e,s,r,gg){
var z=gz$7061636b616765436f6d706f6e656e742f_27()
var eJZ=e_[x[28]].i
_ai(eJZ,x[5],e_,x[28],1,1)
_ai(eJZ,x[6],e_,x[28],2,2)
cs.push("./packageComponent/pages/media/live-pusher/live-pusher.wxml:view:4:2")
var bKZ=_mz(z,'view',['class',0,'data-weui-theme',1],[],e,s,gg)
var oLZ=_v()
_(bKZ,oLZ)
cs.push("./packageComponent/pages/media/live-pusher/live-pusher.wxml:template:5:4")
var xMZ=_oz(z,3,e,s,gg)
var oNZ=_gd(x[28],xMZ,e_,d_)
if(oNZ){
var fOZ=_1z(z,2,e,s,gg) || {}
var cur_globalf=gg.f
oLZ.wxXCkey=3
oNZ(fOZ,fOZ,oLZ,gg)
gg.f=cur_globalf
}
else _w(xMZ,x[28],5,16)
cs.pop()
cs.push("./packageComponent/pages/media/live-pusher/live-pusher.wxml:view:6:4")
var cPZ=_n('view')
_rz(z,cPZ,'class',4,e,s,gg)
cs.push("./packageComponent/pages/media/live-pusher/live-pusher.wxml:view:7:7")
var hQZ=_n('view')
_rz(z,hQZ,'class',5,e,s,gg)
cs.push("./packageComponent/pages/media/live-pusher/live-pusher.wxml:live-pusher:8:4")
var oRZ=_mz(z,'live-pusher',['autopush',-1,'binderror',6,'bindstatechange',1,'id',2,'mode',3,'url',4],[],e,s,gg)
cs.pop()
_(hQZ,oRZ)
cs.pop()
_(cPZ,hQZ)
cs.push("./packageComponent/pages/media/live-pusher/live-pusher.wxml:view:11:3")
var cSZ=_n('view')
_rz(z,cSZ,'class',11,e,s,gg)
cs.push("./packageComponent/pages/media/live-pusher/live-pusher.wxml:view:12:4")
var oTZ=_n('view')
_rz(z,oTZ,'class',12,e,s,gg)
var lUZ=_oz(z,13,e,s,gg)
_(oTZ,lUZ)
cs.pop()
_(cSZ,oTZ)
cs.push("./packageComponent/pages/media/live-pusher/live-pusher.wxml:input:13:4")
var aVZ=_mz(z,'input',['bindinput',14,'name',1,'placeholder',2,'value',3],[],e,s,gg)
cs.pop()
_(cSZ,aVZ)
cs.push("./packageComponent/pages/media/live-pusher/live-pusher.wxml:button:14:7")
var tWZ=_mz(z,'button',['bindtap',18,'type',1],[],e,s,gg)
var eXZ=_oz(z,20,e,s,gg)
_(tWZ,eXZ)
cs.pop()
_(cSZ,tWZ)
cs.pop()
_(cPZ,cSZ)
cs.push("./packageComponent/pages/media/live-pusher/live-pusher.wxml:view:19:3")
var bYZ=_n('view')
_rz(z,bYZ,'class',21,e,s,gg)
cs.push("./packageComponent/pages/media/live-pusher/live-pusher.wxml:button:20:4")
var oZZ=_mz(z,'button',['bindtap',22,'class',1,'type',2],[],e,s,gg)
var x1Z=_oz(z,25,e,s,gg)
_(oZZ,x1Z)
cs.pop()
_(bYZ,oZZ)
cs.push("./packageComponent/pages/media/live-pusher/live-pusher.wxml:button:21:4")
var o2Z=_mz(z,'button',['bindtap',26,'class',1,'type',2],[],e,s,gg)
var f3Z=_oz(z,29,e,s,gg)
_(o2Z,f3Z)
cs.pop()
_(bYZ,o2Z)
cs.push("./packageComponent/pages/media/live-pusher/live-pusher.wxml:button:22:4")
var c4Z=_mz(z,'button',['bindtap',30,'class',1,'type',2],[],e,s,gg)
var h5Z=_oz(z,33,e,s,gg)
_(c4Z,h5Z)
cs.pop()
_(bYZ,c4Z)
cs.push("./packageComponent/pages/media/live-pusher/live-pusher.wxml:button:23:4")
var o6Z=_mz(z,'button',['bindtap',34,'class',1,'type',2],[],e,s,gg)
var c7Z=_oz(z,37,e,s,gg)
_(o6Z,c7Z)
cs.pop()
_(bYZ,o6Z)
cs.push("./packageComponent/pages/media/live-pusher/live-pusher.wxml:button:24:4")
var o8Z=_mz(z,'button',['bindtap',38,'class',1,'type',2],[],e,s,gg)
var l9Z=_oz(z,41,e,s,gg)
_(o8Z,l9Z)
cs.pop()
_(bYZ,o8Z)
cs.pop()
_(cPZ,bYZ)
cs.pop()
_(bKZ,cPZ)
var a0Z=_v()
_(bKZ,a0Z)
cs.push("./packageComponent/pages/media/live-pusher/live-pusher.wxml:template:28:4")
var tA1=_oz(z,42,e,s,gg)
var eB1=_gd(x[28],tA1,e_,d_)
if(eB1){
var bC1={}
var cur_globalf=gg.f
a0Z.wxXCkey=3
eB1(bC1,bC1,a0Z,gg)
gg.f=cur_globalf
}
else _w(tA1,x[28],28,16)
cs.pop()
cs.pop()
_(r,bKZ)
eJZ.pop()
eJZ.pop()
return r
}
e_[x[28]]={f:m26,j:[],i:[],ti:[x[5],x[6]],ic:[]}
d_[x[29]]={}
var m27=function(e,s,r,gg){
var z=gz$7061636b616765436f6d706f6e656e742f_28()
var xE1=e_[x[29]].i
_ai(xE1,x[5],e_,x[29],1,1)
_ai(xE1,x[6],e_,x[29],2,2)
cs.push("./packageComponent/pages/media/video/video.wxml:view:4:2")
var oF1=_mz(z,'view',['class',0,'data-weui-theme',1],[],e,s,gg)
var fG1=_v()
_(oF1,fG1)
cs.push("./packageComponent/pages/media/video/video.wxml:template:5:4")
var cH1=_oz(z,3,e,s,gg)
var hI1=_gd(x[29],cH1,e_,d_)
if(hI1){
var oJ1=_1z(z,2,e,s,gg) || {}
var cur_globalf=gg.f
fG1.wxXCkey=3
hI1(oJ1,oJ1,fG1,gg)
gg.f=cur_globalf
}
else _w(cH1,x[29],5,16)
cs.pop()
cs.push("./packageComponent/pages/media/video/video.wxml:view:7:4")
var cK1=_n('view')
_rz(z,cK1,'class',4,e,s,gg)
cs.push("./packageComponent/pages/media/video/video.wxml:view:8:6")
var oL1=_n('view')
_rz(z,oL1,'class',5,e,s,gg)
cs.push("./packageComponent/pages/media/video/video.wxml:video:9:8")
var lM1=_mz(z,'video',['controls',-1,'danmuBtn',-1,'enableDanmu',-1,'showScreenLockButton',-1,'showCastingButton',-1,'bindenterpictureinpicture',6,'binderror',1,'bindleavepictureinpicture',2,'danmuList',3,'enableAutoRotation',4,'id',5,'muted',6,'pictureInPictureMode',7,'showCenterPlayBtn',8,'showMuteBtn',9,'showPlayBtn',10,'src',11],[],e,s,gg)
cs.pop()
_(oL1,lM1)
cs.push("./packageComponent/pages/media/video/video.wxml:view:27:8")
var aN1=_n('view')
_rz(z,aN1,'class',18,e,s,gg)
cs.push("./packageComponent/pages/media/video/video.wxml:view:28:10")
var tO1=_n('view')
var eP1=_oz(z,19,e,s,gg)
_(tO1,eP1)
cs.pop()
_(aN1,tO1)
cs.push("./packageComponent/pages/media/video/video.wxml:view:29:10")
var bQ1=_n('view')
cs.push("./packageComponent/pages/media/video/video.wxml:switch:30:12")
var oR1=_mz(z,'switch',['bindchange',20,'checked',1],[],e,s,gg)
oR1.rawAttr={"model:checked":"{{ enableAutoRotation }}",};cs.pop()
_(bQ1,oR1)
cs.pop()
_(aN1,bQ1)
cs.pop()
_(oL1,aN1)
cs.push("./packageComponent/pages/media/video/video.wxml:view:33:8")
var xS1=_n('view')
_rz(z,xS1,'class',22,e,s,gg)
cs.push("./packageComponent/pages/media/video/video.wxml:view:34:10")
var oT1=_n('view')
_rz(z,oT1,'class',23,e,s,gg)
cs.push("./packageComponent/pages/media/video/video.wxml:view:35:12")
var fU1=_n('view')
_rz(z,fU1,'class',24,e,s,gg)
cs.push("./packageComponent/pages/media/video/video.wxml:view:36:14")
var cV1=_n('view')
_rz(z,cV1,'class',25,e,s,gg)
var hW1=_oz(z,26,e,s,gg)
_(cV1,hW1)
cs.pop()
_(fU1,cV1)
cs.pop()
_(oT1,fU1)
cs.push("./packageComponent/pages/media/video/video.wxml:view:38:12")
var oX1=_n('view')
_rz(z,oX1,'class',27,e,s,gg)
cs.push("./packageComponent/pages/media/video/video.wxml:input:39:14")
var cY1=_mz(z,'input',['bindblur',28,'class',1,'placeholder',2,'type',3],[],e,s,gg)
cs.pop()
_(oX1,cY1)
cs.pop()
_(oT1,oX1)
cs.pop()
_(xS1,oT1)
cs.pop()
_(oL1,xS1)
cs.push("./packageComponent/pages/media/video/video.wxml:view:43:8")
var oZ1=_n('view')
_rz(z,oZ1,'class',32,e,s,gg)
cs.push("./packageComponent/pages/media/video/video.wxml:button:44:10")
var l11=_mz(z,'button',['bindtap',33,'class',1,'formType',2,'type',3],[],e,s,gg)
var a21=_oz(z,37,e,s,gg)
_(l11,a21)
cs.pop()
_(oZ1,l11)
cs.pop()
_(oL1,oZ1)
cs.push("./packageComponent/pages/media/video/video.wxml:view:46:8")
var t31=_n('view')
_rz(z,t31,'class',38,e,s,gg)
cs.push("./packageComponent/pages/media/video/video.wxml:navigator:47:10")
var e41=_mz(z,'navigator',['hoverClass',39,'url',1],[],e,s,gg)
cs.push("./packageComponent/pages/media/video/video.wxml:button:48:12")
var b51=_mz(z,'button',['bindtap',41,'class',1,'type',2],[],e,s,gg)
var o61=_oz(z,44,e,s,gg)
_(b51,o61)
cs.pop()
_(e41,b51)
cs.pop()
_(t31,e41)
cs.pop()
_(oL1,t31)
cs.pop()
_(cK1,oL1)
cs.pop()
_(oF1,cK1)
var x71=_v()
_(oF1,x71)
cs.push("./packageComponent/pages/media/video/video.wxml:template:55:4")
var o81=_oz(z,45,e,s,gg)
var f91=_gd(x[29],o81,e_,d_)
if(f91){
var c01={}
var cur_globalf=gg.f
x71.wxXCkey=3
f91(c01,c01,x71,gg)
gg.f=cur_globalf
}
else _w(o81,x[29],55,16)
cs.pop()
cs.pop()
_(r,oF1)
xE1.pop()
xE1.pop()
return r
}
e_[x[29]]={f:m27,j:[],i:[],ti:[x[5],x[6]],ic:[]}
d_[x[30]]={}
var m28=function(e,s,r,gg){
var z=gz$7061636b616765436f6d706f6e656e742f_29()
var oB2=e_[x[30]].i
_ai(oB2,x[5],e_,x[30],1,1)
_ai(oB2,x[6],e_,x[30],2,2)
cs.push("./packageComponent/pages/nav/navigator/navigator.wxml:view:4:2")
var cC2=_mz(z,'view',['class',0,'data-weui-theme',1],[],e,s,gg)
var oD2=_v()
_(cC2,oD2)
cs.push("./packageComponent/pages/nav/navigator/navigator.wxml:template:5:4")
var lE2=_oz(z,3,e,s,gg)
var aF2=_gd(x[30],lE2,e_,d_)
if(aF2){
var tG2=_1z(z,2,e,s,gg) || {}
var cur_globalf=gg.f
oD2.wxXCkey=3
aF2(tG2,tG2,oD2,gg)
gg.f=cur_globalf
}
else _w(lE2,x[30],5,16)
cs.pop()
cs.push("./packageComponent/pages/nav/navigator/navigator.wxml:view:7:4")
var eH2=_n('view')
_rz(z,eH2,'class',4,e,s,gg)
cs.push("./packageComponent/pages/nav/navigator/navigator.wxml:view:8:6")
var bI2=_n('view')
_rz(z,bI2,'class',5,e,s,gg)
cs.push("./packageComponent/pages/nav/navigator/navigator.wxml:navigator:9:8")
var oJ2=_mz(z,'navigator',['hoverClass',6,'url',1],[],e,s,gg)
cs.push("./packageComponent/pages/nav/navigator/navigator.wxml:button:10:9")
var xK2=_n('button')
_rz(z,xK2,'type',8,e,s,gg)
var oL2=_oz(z,9,e,s,gg)
_(xK2,oL2)
cs.pop()
_(oJ2,xK2)
cs.pop()
_(bI2,oJ2)
cs.push("./packageComponent/pages/nav/navigator/navigator.wxml:navigator:12:8")
var fM2=_mz(z,'navigator',['redirect',-1,'hoverClass',10,'url',1],[],e,s,gg)
cs.push("./packageComponent/pages/nav/navigator/navigator.wxml:button:13:10")
var cN2=_n('button')
_rz(z,cN2,'type',12,e,s,gg)
var hO2=_oz(z,13,e,s,gg)
_(cN2,hO2)
cs.pop()
_(fM2,cN2)
cs.pop()
_(bI2,fM2)
cs.push("./packageComponent/pages/nav/navigator/navigator.wxml:navigator:15:8")
var oP2=_mz(z,'navigator',['appId',14,'hoverClass',1,'openType',2,'target',3,'version',4],[],e,s,gg)
cs.push("./packageComponent/pages/nav/navigator/navigator.wxml:button:16:10")
var cQ2=_n('button')
_rz(z,cQ2,'type',19,e,s,gg)
var oR2=_oz(z,20,e,s,gg)
_(cQ2,oR2)
cs.pop()
_(oP2,cQ2)
cs.pop()
_(bI2,oP2)
cs.pop()
_(eH2,bI2)
cs.pop()
_(cC2,eH2)
var lS2=_v()
_(cC2,lS2)
cs.push("./packageComponent/pages/nav/navigator/navigator.wxml:template:21:4")
var aT2=_oz(z,21,e,s,gg)
var tU2=_gd(x[30],aT2,e_,d_)
if(tU2){
var eV2={}
var cur_globalf=gg.f
lS2.wxXCkey=3
tU2(eV2,eV2,lS2,gg)
gg.f=cur_globalf
}
else _w(aT2,x[30],21,16)
cs.pop()
cs.pop()
_(r,cC2)
oB2.pop()
oB2.pop()
return r
}
e_[x[30]]={f:m28,j:[],i:[],ti:[x[5],x[6]],ic:[]}
d_[x[31]]={}
var m29=function(e,s,r,gg){
var z=gz$7061636b616765436f6d706f6e656e742f_30()
var oX2=e_[x[31]].i
_ai(oX2,x[5],e_,x[31],1,1)
_ai(oX2,x[6],e_,x[31],2,2)
cs.push("./packageComponent/pages/obstacle-free/aria-component/aria-component.wxml:view:4:2")
var xY2=_mz(z,'view',['class',0,'data-weui-theme',1],[],e,s,gg)
var oZ2=_v()
_(xY2,oZ2)
cs.push("./packageComponent/pages/obstacle-free/aria-component/aria-component.wxml:template:5:4")
var f12=_oz(z,3,e,s,gg)
var c22=_gd(x[31],f12,e_,d_)
if(c22){
var h32=_1z(z,2,e,s,gg) || {}
var cur_globalf=gg.f
oZ2.wxXCkey=3
c22(h32,h32,oZ2,gg)
gg.f=cur_globalf
}
else _w(f12,x[31],5,16)
cs.pop()
cs.push("./packageComponent/pages/obstacle-free/aria-component/aria-component.wxml:view:6:4")
var o42=_n('view')
_rz(z,o42,'class',4,e,s,gg)
cs.push("./packageComponent/pages/obstacle-free/aria-component/aria-component.wxml:view:7:5")
var c52=_n('view')
_rz(z,c52,'class',5,e,s,gg)
cs.push("./packageComponent/pages/obstacle-free/aria-component/aria-component.wxml:view:8:8")
var o62=_n('view')
_rz(z,o62,'class',6,e,s,gg)
cs.push("./packageComponent/pages/obstacle-free/aria-component/aria-component.wxml:text:9:10")
var l72=_n('text')
var a82=_oz(z,7,e,s,gg)
_(l72,a82)
cs.pop()
_(o62,l72)
cs.pop()
_(c52,o62)
cs.push("./packageComponent/pages/obstacle-free/aria-component/aria-component.wxml:view:11:8")
var t92=_n('view')
_rz(z,t92,'class',8,e,s,gg)
cs.push("./packageComponent/pages/obstacle-free/aria-component/aria-component.wxml:view:12:10")
var e02=_n('view')
_rz(z,e02,'class',9,e,s,gg)
cs.push("./packageComponent/pages/obstacle-free/aria-component/aria-component.wxml:text:13:12")
var bA3=_n('text')
var oB3=_oz(z,10,e,s,gg)
_(bA3,oB3)
cs.pop()
_(e02,bA3)
cs.pop()
_(t92,e02)
cs.pop()
_(c52,t92)
cs.pop()
_(o42,c52)
cs.push("./packageComponent/pages/obstacle-free/aria-component/aria-component.wxml:view:17:6")
var xC3=_n('view')
_rz(z,xC3,'class',11,e,s,gg)
cs.push("./packageComponent/pages/obstacle-free/aria-component/aria-component.wxml:view:18:8")
var oD3=_n('view')
_rz(z,oD3,'class',12,e,s,gg)
cs.push("./packageComponent/pages/obstacle-free/aria-component/aria-component.wxml:text:19:10")
var fE3=_n('text')
var cF3=_oz(z,13,e,s,gg)
_(fE3,cF3)
cs.pop()
_(oD3,fE3)
cs.pop()
_(xC3,oD3)
cs.push("./packageComponent/pages/obstacle-free/aria-component/aria-component.wxml:view:21:8")
var hG3=_n('view')
_rz(z,hG3,'class',14,e,s,gg)
cs.push("./packageComponent/pages/obstacle-free/aria-component/aria-component.wxml:view:22:10")
var oH3=_mz(z,'view',['ariaLabel',15,'ariaRole',1,'style',2],[],e,s,gg)
var cI3=_oz(z,18,e,s,gg)
_(oH3,cI3)
cs.pop()
_(hG3,oH3)
cs.pop()
_(xC3,hG3)
cs.pop()
_(o42,xC3)
cs.pop()
_(xY2,o42)
var oJ3=_v()
_(xY2,oJ3)
cs.push("./packageComponent/pages/obstacle-free/aria-component/aria-component.wxml:template:26:4")
var lK3=_oz(z,19,e,s,gg)
var aL3=_gd(x[31],lK3,e_,d_)
if(aL3){
var tM3={}
var cur_globalf=gg.f
oJ3.wxXCkey=3
aL3(tM3,tM3,oJ3,gg)
gg.f=cur_globalf
}
else _w(lK3,x[31],26,16)
cs.pop()
cs.pop()
_(r,xY2)
oX2.pop()
oX2.pop()
return r
}
e_[x[31]]={f:m29,j:[],i:[],ti:[x[5],x[6]],ic:[]}
d_[x[32]]={}
var m30=function(e,s,r,gg){
var z=gz$7061636b616765436f6d706f6e656e742f_31()
var bO3=e_[x[32]].i
_ai(bO3,x[5],e_,x[32],1,1)
_ai(bO3,x[6],e_,x[32],2,2)
cs.push("./packageComponent/pages/open/ad/ad.wxml:view:4:2")
var oP3=_mz(z,'view',['class',0,'data-weui-theme',1],[],e,s,gg)
var xQ3=_v()
_(oP3,xQ3)
cs.push("./packageComponent/pages/open/ad/ad.wxml:template:5:4")
var oR3=_oz(z,3,e,s,gg)
var fS3=_gd(x[32],oR3,e_,d_)
if(fS3){
var cT3=_1z(z,2,e,s,gg) || {}
var cur_globalf=gg.f
xQ3.wxXCkey=3
fS3(cT3,cT3,xQ3,gg)
gg.f=cur_globalf
}
else _w(oR3,x[32],5,16)
cs.pop()
cs.push("./packageComponent/pages/open/ad/ad.wxml:view:7:4")
var hU3=_n('view')
_rz(z,hU3,'class',4,e,s,gg)
cs.push("./packageComponent/pages/open/ad/ad.wxml:view:8:6")
var oX3=_n('view')
_rz(z,oX3,'class',5,e,s,gg)
cs.push("./packageComponent/pages/open/ad/ad.wxml:view:9:8")
var lY3=_n('view')
_rz(z,lY3,'class',6,e,s,gg)
var aZ3=_oz(z,7,e,s,gg)
_(lY3,aZ3)
cs.pop()
_(oX3,lY3)
cs.push("./packageComponent/pages/open/ad/ad.wxml:ad:10:8")
var t13=_n('ad')
_rz(z,t13,'unitId',8,e,s,gg)
cs.pop()
_(oX3,t13)
cs.pop()
_(hU3,oX3)
var oV3=_v()
_(hU3,oV3)
if(_oz(z,9,e,s,gg)){oV3.wxVkey=1
cs.push("./packageComponent/pages/open/ad/ad.wxml:view:12:6")
cs.push("./packageComponent/pages/open/ad/ad.wxml:view:12:6")
var e23=_n('view')
_rz(z,e23,'class',10,e,s,gg)
cs.push("./packageComponent/pages/open/ad/ad.wxml:view:13:8")
var b33=_n('view')
_rz(z,b33,'class',11,e,s,gg)
var o43=_oz(z,12,e,s,gg)
_(b33,o43)
cs.pop()
_(e23,b33)
cs.push("./packageComponent/pages/open/ad/ad.wxml:ad:14:8")
var x53=_n('ad')
_rz(z,x53,'unitId',13,e,s,gg)
cs.pop()
_(e23,x53)
cs.pop()
_(oV3,e23)
cs.pop()
}
else{oV3.wxVkey=2
cs.push("./packageComponent/pages/open/ad/ad.wxml:view:16:6")
cs.push("./packageComponent/pages/open/ad/ad.wxml:view:16:6")
var o63=_n('view')
_rz(z,o63,'class',14,e,s,gg)
cs.push("./packageComponent/pages/open/ad/ad.wxml:view:17:8")
var f73=_n('view')
_rz(z,f73,'class',15,e,s,gg)
var c83=_oz(z,16,e,s,gg)
_(f73,c83)
cs.pop()
_(o63,f73)
cs.push("./packageComponent/pages/open/ad/ad.wxml:ad:18:8")
var h93=_n('ad')
_rz(z,h93,'unitId',17,e,s,gg)
cs.pop()
_(o63,h93)
cs.pop()
_(oV3,o63)
cs.pop()
}
var cW3=_v()
_(hU3,cW3)
if(_oz(z,18,e,s,gg)){cW3.wxVkey=1
cs.push("./packageComponent/pages/open/ad/ad.wxml:view:20:6")
cs.push("./packageComponent/pages/open/ad/ad.wxml:view:20:6")
var o03=_n('view')
_rz(z,o03,'class',19,e,s,gg)
cs.push("./packageComponent/pages/open/ad/ad.wxml:view:21:8")
var cA4=_n('view')
_rz(z,cA4,'class',20,e,s,gg)
var oB4=_oz(z,21,e,s,gg)
_(cA4,oB4)
cs.pop()
_(o03,cA4)
cs.push("./packageComponent/pages/open/ad/ad.wxml:ad:22:8")
var lC4=_n('ad')
_rz(z,lC4,'unitId',22,e,s,gg)
cs.pop()
_(o03,lC4)
cs.pop()
_(cW3,o03)
cs.pop()
}
else{cW3.wxVkey=2
cs.push("./packageComponent/pages/open/ad/ad.wxml:view:24:6")
cs.push("./packageComponent/pages/open/ad/ad.wxml:view:24:6")
var aD4=_n('view')
_rz(z,aD4,'class',23,e,s,gg)
cs.push("./packageComponent/pages/open/ad/ad.wxml:view:25:8")
var tE4=_n('view')
_rz(z,tE4,'class',24,e,s,gg)
var eF4=_oz(z,25,e,s,gg)
_(tE4,eF4)
cs.pop()
_(aD4,tE4)
cs.push("./packageComponent/pages/open/ad/ad.wxml:ad:26:8")
var bG4=_n('ad')
_rz(z,bG4,'unitId',26,e,s,gg)
cs.pop()
_(aD4,bG4)
cs.pop()
_(cW3,aD4)
cs.pop()
}
cs.push("./packageComponent/pages/open/ad/ad.wxml:view:28:6")
var oH4=_n('view')
_rz(z,oH4,'class',27,e,s,gg)
cs.push("./packageComponent/pages/open/ad/ad.wxml:view:29:8")
var xI4=_n('view')
_rz(z,xI4,'class',28,e,s,gg)
var oJ4=_oz(z,29,e,s,gg)
_(xI4,oJ4)
cs.pop()
_(oH4,xI4)
cs.push("./packageComponent/pages/open/ad/ad.wxml:ad:30:8")
var fK4=_n('ad')
_rz(z,fK4,'unitId',30,e,s,gg)
cs.pop()
_(oH4,fK4)
cs.pop()
_(hU3,oH4)
cs.push("./packageComponent/pages/open/ad/ad.wxml:view:32:6")
var cL4=_n('view')
_rz(z,cL4,'class',31,e,s,gg)
cs.push("./packageComponent/pages/open/ad/ad.wxml:view:33:8")
var hM4=_n('view')
_rz(z,hM4,'class',32,e,s,gg)
var oN4=_oz(z,33,e,s,gg)
_(hM4,oN4)
cs.pop()
_(cL4,hM4)
cs.push("./packageComponent/pages/open/ad/ad.wxml:ad:34:8")
var cO4=_n('ad')
_rz(z,cO4,'unitId',34,e,s,gg)
cs.pop()
_(cL4,cO4)
cs.pop()
_(hU3,cL4)
cs.push("./packageComponent/pages/open/ad/ad.wxml:view:36:6")
var oP4=_n('view')
_rz(z,oP4,'class',35,e,s,gg)
cs.push("./packageComponent/pages/open/ad/ad.wxml:view:37:8")
var lQ4=_n('view')
_rz(z,lQ4,'class',36,e,s,gg)
var aR4=_oz(z,37,e,s,gg)
_(lQ4,aR4)
cs.pop()
_(oP4,lQ4)
cs.push("./packageComponent/pages/open/ad/ad.wxml:ad:38:8")
var tS4=_n('ad')
_rz(z,tS4,'unitId',38,e,s,gg)
cs.pop()
_(oP4,tS4)
cs.pop()
_(hU3,oP4)
oV3.wxXCkey=1
cW3.wxXCkey=1
cs.pop()
_(oP3,hU3)
var eT4=_v()
_(oP3,eT4)
cs.push("./packageComponent/pages/open/ad/ad.wxml:template:42:4")
var bU4=_oz(z,39,e,s,gg)
var oV4=_gd(x[32],bU4,e_,d_)
if(oV4){
var xW4={}
var cur_globalf=gg.f
eT4.wxXCkey=3
oV4(xW4,xW4,eT4,gg)
gg.f=cur_globalf
}
else _w(bU4,x[32],42,16)
cs.pop()
cs.pop()
_(r,oP3)
bO3.pop()
bO3.pop()
return r
}
e_[x[32]]={f:m30,j:[],i:[],ti:[x[5],x[6]],ic:[]}
d_[x[33]]={}
var m31=function(e,s,r,gg){
var z=gz$7061636b616765436f6d706f6e656e742f_32()
var fY4=e_[x[33]].i
_ai(fY4,x[5],e_,x[33],1,1)
_ai(fY4,x[6],e_,x[33],2,2)
cs.push("./packageComponent/pages/open/open-data/open-data.wxml:view:13:2")
var cZ4=_mz(z,'view',['class',0,'data-weui-theme',1],[],e,s,gg)
var h14=_v()
_(cZ4,h14)
cs.push("./packageComponent/pages/open/open-data/open-data.wxml:template:14:4")
var o24=_oz(z,3,e,s,gg)
var c34=_gd(x[33],o24,e_,d_)
if(c34){
var o44=_1z(z,2,e,s,gg) || {}
var cur_globalf=gg.f
h14.wxXCkey=3
c34(o44,o44,h14,gg)
gg.f=cur_globalf
}
else _w(o24,x[33],14,16)
cs.pop()
cs.push("./packageComponent/pages/open/open-data/open-data.wxml:view:15:4")
var l54=_n('view')
_rz(z,l54,'class',4,e,s,gg)
cs.push("./packageComponent/pages/open/open-data/open-data.wxml:view:16:6")
var a64=_n('view')
_rz(z,a64,'class',5,e,s,gg)
cs.push("./packageComponent/pages/open/open-data/open-data.wxml:open-data:17:8")
var t74=_mz(z,'open-data',['class',6,'lang',1,'type',2],[],e,s,gg)
cs.pop()
_(a64,t74)
cs.pop()
_(l54,a64)
cs.push("./packageComponent/pages/open/open-data/open-data.wxml:form:19:6")
var e84=_n('form')
cs.push("./packageComponent/pages/open/open-data/open-data.wxml:view:20:8")
var b94=_n('view')
_rz(z,b94,'class',9,e,s,gg)
cs.push("./packageComponent/pages/open/open-data/open-data.wxml:view:21:10")
var o04=_n('view')
_rz(z,o04,'class',10,e,s,gg)
cs.push("./packageComponent/pages/open/open-data/open-data.wxml:view:22:12")
var xA5=_n('view')
_rz(z,xA5,'class',11,e,s,gg)
cs.push("./packageComponent/pages/open/open-data/open-data.wxml:view:23:14")
var oB5=_n('view')
_rz(z,oB5,'class',12,e,s,gg)
cs.push("./packageComponent/pages/open/open-data/open-data.wxml:view:24:16")
var fC5=_n('view')
_rz(z,fC5,'class',13,e,s,gg)
var cD5=_oz(z,14,e,s,gg)
_(fC5,cD5)
cs.pop()
_(oB5,fC5)
cs.pop()
_(xA5,oB5)
cs.push("./packageComponent/pages/open/open-data/open-data.wxml:view:26:14")
var hE5=_n('view')
_rz(z,hE5,'class',15,e,s,gg)
cs.push("./packageComponent/pages/open/open-data/open-data.wxml:view:27:16")
var oF5=_n('view')
_rz(z,oF5,'class',16,e,s,gg)
cs.push("./packageComponent/pages/open/open-data/open-data.wxml:open-data:28:18")
var cG5=_mz(z,'open-data',['lang',17,'type',1],[],e,s,gg)
cs.pop()
_(oF5,cG5)
cs.pop()
_(hE5,oF5)
cs.pop()
_(xA5,hE5)
cs.pop()
_(o04,xA5)
cs.push("./packageComponent/pages/open/open-data/open-data.wxml:view:33:12")
var oH5=_n('view')
_rz(z,oH5,'class',19,e,s,gg)
cs.push("./packageComponent/pages/open/open-data/open-data.wxml:view:34:14")
var lI5=_n('view')
_rz(z,lI5,'class',20,e,s,gg)
cs.push("./packageComponent/pages/open/open-data/open-data.wxml:view:35:16")
var aJ5=_n('view')
_rz(z,aJ5,'class',21,e,s,gg)
var tK5=_oz(z,22,e,s,gg)
_(aJ5,tK5)
cs.pop()
_(lI5,aJ5)
cs.pop()
_(oH5,lI5)
cs.push("./packageComponent/pages/open/open-data/open-data.wxml:view:37:14")
var eL5=_n('view')
_rz(z,eL5,'class',23,e,s,gg)
cs.push("./packageComponent/pages/open/open-data/open-data.wxml:view:38:16")
var bM5=_n('view')
_rz(z,bM5,'class',24,e,s,gg)
cs.push("./packageComponent/pages/open/open-data/open-data.wxml:open-data:39:18")
var oN5=_mz(z,'open-data',['lang',25,'type',1],[],e,s,gg)
cs.pop()
_(bM5,oN5)
cs.pop()
_(eL5,bM5)
cs.pop()
_(oH5,eL5)
cs.pop()
_(o04,oH5)
cs.push("./packageComponent/pages/open/open-data/open-data.wxml:view:44:12")
var xO5=_n('view')
_rz(z,xO5,'class',27,e,s,gg)
cs.push("./packageComponent/pages/open/open-data/open-data.wxml:view:45:14")
var oP5=_n('view')
_rz(z,oP5,'class',28,e,s,gg)
cs.push("./packageComponent/pages/open/open-data/open-data.wxml:view:46:16")
var fQ5=_n('view')
_rz(z,fQ5,'class',29,e,s,gg)
var cR5=_oz(z,30,e,s,gg)
_(fQ5,cR5)
cs.pop()
_(oP5,fQ5)
cs.pop()
_(xO5,oP5)
cs.push("./packageComponent/pages/open/open-data/open-data.wxml:view:48:14")
var hS5=_n('view')
_rz(z,hS5,'class',31,e,s,gg)
cs.push("./packageComponent/pages/open/open-data/open-data.wxml:view:49:16")
var oT5=_n('view')
_rz(z,oT5,'class',32,e,s,gg)
cs.push("./packageComponent/pages/open/open-data/open-data.wxml:open-data:50:18")
var cU5=_mz(z,'open-data',['class',33,'lang',1,'type',2],[],e,s,gg)
cs.pop()
_(oT5,cU5)
cs.push("./packageComponent/pages/open/open-data/open-data.wxml:open-data:51:18")
var oV5=_mz(z,'open-data',['class',36,'lang',1,'type',2],[],e,s,gg)
cs.pop()
_(oT5,oV5)
cs.push("./packageComponent/pages/open/open-data/open-data.wxml:open-data:52:18")
var lW5=_mz(z,'open-data',['class',39,'lang',1,'type',2],[],e,s,gg)
cs.pop()
_(oT5,lW5)
cs.pop()
_(hS5,oT5)
cs.pop()
_(xO5,hS5)
cs.pop()
_(o04,xO5)
cs.push("./packageComponent/pages/open/open-data/open-data.wxml:view:58:12")
var aX5=_n('view')
_rz(z,aX5,'class',42,e,s,gg)
cs.push("./packageComponent/pages/open/open-data/open-data.wxml:view:59:14")
var tY5=_n('view')
_rz(z,tY5,'class',43,e,s,gg)
cs.push("./packageComponent/pages/open/open-data/open-data.wxml:view:60:16")
var eZ5=_n('view')
_rz(z,eZ5,'class',44,e,s,gg)
var b15=_oz(z,45,e,s,gg)
_(eZ5,b15)
cs.pop()
_(tY5,eZ5)
cs.pop()
_(aX5,tY5)
cs.push("./packageComponent/pages/open/open-data/open-data.wxml:view:62:14")
var o25=_n('view')
_rz(z,o25,'class',46,e,s,gg)
cs.push("./packageComponent/pages/open/open-data/open-data.wxml:view:63:16")
var x35=_n('view')
_rz(z,x35,'class',47,e,s,gg)
cs.push("./packageComponent/pages/open/open-data/open-data.wxml:open-data:64:18")
var o45=_mz(z,'open-data',['lang',48,'type',1],[],e,s,gg)
cs.pop()
_(x35,o45)
cs.pop()
_(o25,x35)
cs.pop()
_(aX5,o25)
cs.pop()
_(o04,aX5)
cs.pop()
_(b94,o04)
cs.pop()
_(e84,b94)
cs.pop()
_(l54,e84)
cs.pop()
_(cZ4,l54)
var f55=_v()
_(cZ4,f55)
cs.push("./packageComponent/pages/open/open-data/open-data.wxml:template:73:4")
var c65=_oz(z,50,e,s,gg)
var h75=_gd(x[33],c65,e_,d_)
if(h75){
var o85={}
var cur_globalf=gg.f
f55.wxXCkey=3
h75(o85,o85,f55,gg)
gg.f=cur_globalf
}
else _w(c65,x[33],73,16)
cs.pop()
cs.pop()
_(r,cZ4)
fY4.pop()
fY4.pop()
return r
}
e_[x[33]]={f:m31,j:[],i:[],ti:[x[5],x[6]],ic:[]}
d_[x[34]]={}
var m32=function(e,s,r,gg){
var z=gz$7061636b616765436f6d706f6e656e742f_33()
cs.push("./packageComponent/pages/open/web-view/web-view.wxml:web-view:1:2")
var o05=_n('web-view')
_rz(z,o05,'src',0,e,s,gg)
cs.pop()
_(r,o05)
return r
}
e_[x[34]]={f:m32,j:[],i:[],ti:[],ic:[]}
d_[x[35]]={}
var m33=function(e,s,r,gg){
var z=gz$7061636b616765436f6d706f6e656e742f_34()
var aB6=e_[x[35]].i
_ai(aB6,x[5],e_,x[35],1,1)
_ai(aB6,x[6],e_,x[35],2,2)
cs.push("./packageComponent/pages/view/cover-view/cover-view.wxml:view:4:2")
var tC6=_mz(z,'view',['class',0,'data-weui-theme',1],[],e,s,gg)
var eD6=_v()
_(tC6,eD6)
cs.push("./packageComponent/pages/view/cover-view/cover-view.wxml:template:5:4")
var bE6=_oz(z,3,e,s,gg)
var oF6=_gd(x[35],bE6,e_,d_)
if(oF6){
var xG6=_1z(z,2,e,s,gg) || {}
var cur_globalf=gg.f
eD6.wxXCkey=3
oF6(xG6,xG6,eD6,gg)
gg.f=cur_globalf
}
else _w(bE6,x[35],5,16)
cs.pop()
cs.push("./packageComponent/pages/view/cover-view/cover-view.wxml:view:7:4")
var oH6=_n('view')
_rz(z,oH6,'class',4,e,s,gg)
cs.push("./packageComponent/pages/view/cover-view/cover-view.wxml:view:8:6")
var fI6=_n('view')
_rz(z,fI6,'class',5,e,s,gg)
cs.push("./packageComponent/pages/view/cover-view/cover-view.wxml:map:9:8")
var cJ6=_mz(z,'map',['latitude',6,'longitude',1,'style',2],[],e,s,gg)
cs.push("./packageComponent/pages/view/cover-view/cover-view.wxml:cover-view:14:10")
var hK6=_n('cover-view')
_rz(z,hK6,'class',9,e,s,gg)
cs.push("./packageComponent/pages/view/cover-view/cover-view.wxml:cover-view:15:12")
var oL6=_n('cover-view')
_rz(z,oL6,'class',10,e,s,gg)
cs.push("./packageComponent/pages/view/cover-view/cover-view.wxml:cover-view:16:14")
var cM6=_mz(z,'cover-view',['class',11,'style',1],[],e,s,gg)
cs.push("./packageComponent/pages/view/cover-view/cover-view.wxml:cover-view:17:16")
var oN6=_n('cover-view')
_rz(z,oN6,'class',13,e,s,gg)
cs.pop()
_(cM6,oN6)
cs.push("./packageComponent/pages/view/cover-view/cover-view.wxml:cover-view:18:16")
var lO6=_n('cover-view')
_rz(z,lO6,'class',14,e,s,gg)
cs.pop()
_(cM6,lO6)
cs.push("./packageComponent/pages/view/cover-view/cover-view.wxml:cover-view:19:16")
var aP6=_n('cover-view')
_rz(z,aP6,'class',15,e,s,gg)
cs.pop()
_(cM6,aP6)
cs.pop()
_(oL6,cM6)
cs.pop()
_(hK6,oL6)
cs.pop()
_(cJ6,hK6)
cs.pop()
_(fI6,cJ6)
cs.pop()
_(oH6,fI6)
cs.pop()
_(tC6,oH6)
var tQ6=_v()
_(tC6,tQ6)
cs.push("./packageComponent/pages/view/cover-view/cover-view.wxml:template:27:4")
var eR6=_oz(z,16,e,s,gg)
var bS6=_gd(x[35],eR6,e_,d_)
if(bS6){
var oT6={}
var cur_globalf=gg.f
tQ6.wxXCkey=3
bS6(oT6,oT6,tQ6,gg)
gg.f=cur_globalf
}
else _w(eR6,x[35],27,16)
cs.pop()
cs.pop()
_(r,tC6)
aB6.pop()
aB6.pop()
return r
}
e_[x[35]]={f:m33,j:[],i:[],ti:[x[5],x[6]],ic:[]}
d_[x[36]]={}
var m34=function(e,s,r,gg){
var z=gz$7061636b616765436f6d706f6e656e742f_35()
var oV6=e_[x[36]].i
_ai(oV6,x[5],e_,x[36],1,1)
_ai(oV6,x[6],e_,x[36],2,2)
cs.push("./packageComponent/pages/view/movable-view/movable-view.wxml:view:4:2")
var fW6=_mz(z,'view',['class',0,'data-weui-theme',1],[],e,s,gg)
var cX6=_v()
_(fW6,cX6)
cs.push("./packageComponent/pages/view/movable-view/movable-view.wxml:template:5:4")
var hY6=_oz(z,3,e,s,gg)
var oZ6=_gd(x[36],hY6,e_,d_)
if(oZ6){
var c16=_1z(z,2,e,s,gg) || {}
var cur_globalf=gg.f
cX6.wxXCkey=3
oZ6(c16,c16,cX6,gg)
gg.f=cur_globalf
}
else _w(hY6,x[36],5,16)
cs.pop()
cs.push("./packageComponent/pages/view/movable-view/movable-view.wxml:view:7:4")
var o26=_n('view')
_rz(z,o26,'class',4,e,s,gg)
cs.push("./packageComponent/pages/view/movable-view/movable-view.wxml:view:8:6")
var l36=_n('view')
_rz(z,l36,'class',5,e,s,gg)
cs.push("./packageComponent/pages/view/movable-view/movable-view.wxml:view:9:8")
var a46=_n('view')
_rz(z,a46,'class',6,e,s,gg)
var t56=_oz(z,7,e,s,gg)
_(a46,t56)
cs.pop()
_(l36,a46)
cs.push("./packageComponent/pages/view/movable-view/movable-view.wxml:movable-area:10:8")
var e66=_n('movable-area')
cs.push("./packageComponent/pages/view/movable-view/movable-view.wxml:movable-view:11:10")
var b76=_mz(z,'movable-view',['direction',8,'x',1,'y',2],[],e,s,gg)
var o86=_oz(z,11,e,s,gg)
_(b76,o86)
cs.pop()
_(e66,b76)
cs.pop()
_(l36,e66)
cs.pop()
_(o26,l36)
cs.push("./packageComponent/pages/view/movable-view/movable-view.wxml:view:14:6")
var x96=_n('view')
_rz(z,x96,'class',12,e,s,gg)
cs.push("./packageComponent/pages/view/movable-view/movable-view.wxml:button:15:8")
var o06=_mz(z,'button',['bindtap',13,'class',1,'type',2],[],e,s,gg)
var fA7=_oz(z,16,e,s,gg)
_(o06,fA7)
cs.pop()
_(x96,o06)
cs.pop()
_(o26,x96)
cs.push("./packageComponent/pages/view/movable-view/movable-view.wxml:view:18:6")
var cB7=_n('view')
_rz(z,cB7,'class',17,e,s,gg)
cs.push("./packageComponent/pages/view/movable-view/movable-view.wxml:view:19:8")
var hC7=_n('view')
_rz(z,hC7,'class',18,e,s,gg)
var oD7=_oz(z,19,e,s,gg)
_(hC7,oD7)
cs.pop()
_(cB7,hC7)
cs.push("./packageComponent/pages/view/movable-view/movable-view.wxml:movable-area:20:8")
var cE7=_n('movable-area')
cs.push("./packageComponent/pages/view/movable-view/movable-view.wxml:movable-view:21:10")
var oF7=_mz(z,'movable-view',['class',20,'direction',1],[],e,s,gg)
var lG7=_oz(z,22,e,s,gg)
_(oF7,lG7)
cs.pop()
_(cE7,oF7)
cs.pop()
_(cB7,cE7)
cs.pop()
_(o26,cB7)
cs.push("./packageComponent/pages/view/movable-view/movable-view.wxml:view:25:6")
var aH7=_n('view')
_rz(z,aH7,'class',23,e,s,gg)
cs.push("./packageComponent/pages/view/movable-view/movable-view.wxml:view:26:8")
var tI7=_n('view')
_rz(z,tI7,'class',24,e,s,gg)
var eJ7=_oz(z,25,e,s,gg)
_(tI7,eJ7)
cs.pop()
_(aH7,tI7)
cs.push("./packageComponent/pages/view/movable-view/movable-view.wxml:movable-area:27:8")
var bK7=_n('movable-area')
cs.push("./packageComponent/pages/view/movable-view/movable-view.wxml:movable-view:28:10")
var oL7=_n('movable-view')
_rz(z,oL7,'direction',26,e,s,gg)
var xM7=_oz(z,27,e,s,gg)
_(oL7,xM7)
cs.pop()
_(bK7,oL7)
cs.pop()
_(aH7,bK7)
cs.pop()
_(o26,aH7)
cs.push("./packageComponent/pages/view/movable-view/movable-view.wxml:view:32:6")
var oN7=_n('view')
_rz(z,oN7,'class',28,e,s,gg)
cs.push("./packageComponent/pages/view/movable-view/movable-view.wxml:view:33:8")
var fO7=_n('view')
_rz(z,fO7,'class',29,e,s,gg)
var cP7=_oz(z,30,e,s,gg)
_(fO7,cP7)
cs.pop()
_(oN7,fO7)
cs.push("./packageComponent/pages/view/movable-view/movable-view.wxml:movable-area:34:8")
var hQ7=_n('movable-area')
cs.push("./packageComponent/pages/view/movable-view/movable-view.wxml:movable-view:35:10")
var oR7=_n('movable-view')
_rz(z,oR7,'direction',31,e,s,gg)
var cS7=_oz(z,32,e,s,gg)
_(oR7,cS7)
cs.pop()
_(hQ7,oR7)
cs.pop()
_(oN7,hQ7)
cs.pop()
_(o26,oN7)
cs.push("./packageComponent/pages/view/movable-view/movable-view.wxml:view:39:6")
var oT7=_n('view')
_rz(z,oT7,'class',33,e,s,gg)
cs.push("./packageComponent/pages/view/movable-view/movable-view.wxml:view:40:8")
var lU7=_n('view')
_rz(z,lU7,'class',34,e,s,gg)
var aV7=_oz(z,35,e,s,gg)
_(lU7,aV7)
cs.pop()
_(oT7,lU7)
cs.push("./packageComponent/pages/view/movable-view/movable-view.wxml:movable-area:41:8")
var tW7=_n('movable-area')
cs.push("./packageComponent/pages/view/movable-view/movable-view.wxml:movable-view:42:10")
var eX7=_mz(z,'movable-view',['outOfBounds',-1,'direction',36],[],e,s,gg)
var bY7=_oz(z,37,e,s,gg)
_(eX7,bY7)
cs.pop()
_(tW7,eX7)
cs.pop()
_(oT7,tW7)
cs.pop()
_(o26,oT7)
cs.push("./packageComponent/pages/view/movable-view/movable-view.wxml:view:46:6")
var oZ7=_n('view')
_rz(z,oZ7,'class',38,e,s,gg)
cs.push("./packageComponent/pages/view/movable-view/movable-view.wxml:view:47:8")
var x17=_n('view')
_rz(z,x17,'class',39,e,s,gg)
var o27=_oz(z,40,e,s,gg)
_(x17,o27)
cs.pop()
_(oZ7,x17)
cs.push("./packageComponent/pages/view/movable-view/movable-view.wxml:movable-area:48:8")
var f37=_n('movable-area')
cs.push("./packageComponent/pages/view/movable-view/movable-view.wxml:movable-view:49:10")
var c47=_mz(z,'movable-view',['inertia',-1,'direction',41],[],e,s,gg)
var h57=_oz(z,42,e,s,gg)
_(c47,h57)
cs.pop()
_(f37,c47)
cs.pop()
_(oZ7,f37)
cs.pop()
_(o26,oZ7)
cs.push("./packageComponent/pages/view/movable-view/movable-view.wxml:view:53:6")
var o67=_n('view')
_rz(z,o67,'class',43,e,s,gg)
cs.push("./packageComponent/pages/view/movable-view/movable-view.wxml:view:54:8")
var c77=_n('view')
_rz(z,c77,'class',44,e,s,gg)
var o87=_oz(z,45,e,s,gg)
_(c77,o87)
cs.pop()
_(o67,c77)
cs.push("./packageComponent/pages/view/movable-view/movable-view.wxml:movable-area:55:8")
var l97=_n('movable-area')
l97.attr['scaleArea']=true
cs.push("./packageComponent/pages/view/movable-view/movable-view.wxml:movable-view:56:10")
var a07=_mz(z,'movable-view',['scale',-1,'bindchange',46,'bindscale',1,'direction',2,'scaleMax',3,'scaleMin',4,'scaleValue',5],[],e,s,gg)
var tA8=_oz(z,52,e,s,gg)
_(a07,tA8)
cs.pop()
_(l97,a07)
cs.pop()
_(o67,l97)
cs.pop()
_(o26,o67)
cs.push("./packageComponent/pages/view/movable-view/movable-view.wxml:view:60:6")
var eB8=_n('view')
_rz(z,eB8,'class',53,e,s,gg)
cs.push("./packageComponent/pages/view/movable-view/movable-view.wxml:button:61:8")
var bC8=_mz(z,'button',['bindtap',54,'class',1,'type',2],[],e,s,gg)
var oD8=_oz(z,57,e,s,gg)
_(bC8,oD8)
cs.pop()
_(eB8,bC8)
cs.pop()
_(o26,eB8)
cs.pop()
_(fW6,o26)
var xE8=_v()
_(fW6,xE8)
cs.push("./packageComponent/pages/view/movable-view/movable-view.wxml:template:65:4")
var oF8=_oz(z,58,e,s,gg)
var fG8=_gd(x[36],oF8,e_,d_)
if(fG8){
var cH8={}
var cur_globalf=gg.f
xE8.wxXCkey=3
fG8(cH8,cH8,xE8,gg)
gg.f=cur_globalf
}
else _w(oF8,x[36],65,16)
cs.pop()
cs.pop()
_(r,fW6)
oV6.pop()
oV6.pop()
return r
}
e_[x[36]]={f:m34,j:[],i:[],ti:[x[5],x[6]],ic:[]}
d_[x[37]]={}
var m35=function(e,s,r,gg){
var z=gz$7061636b616765436f6d706f6e656e742f_36()
var oJ8=e_[x[37]].i
_ai(oJ8,x[5],e_,x[37],2,2)
_ai(oJ8,x[6],e_,x[37],3,2)
cs.push("./packageComponent/pages/view/scroll-view/scroll-view.wxml:view:5:2")
var cK8=_mz(z,'view',['class',0,'data-weui-theme',1],[],e,s,gg)
var oL8=_v()
_(cK8,oL8)
cs.push("./packageComponent/pages/view/scroll-view/scroll-view.wxml:template:6:4")
var lM8=_oz(z,3,e,s,gg)
var aN8=_gd(x[37],lM8,e_,d_)
if(aN8){
var tO8=_1z(z,2,e,s,gg) || {}
var cur_globalf=gg.f
oL8.wxXCkey=3
aN8(tO8,tO8,oL8,gg)
gg.f=cur_globalf
}
else _w(lM8,x[37],6,16)
cs.pop()
cs.push("./packageComponent/pages/view/scroll-view/scroll-view.wxml:view:8:4")
var eP8=_n('view')
_rz(z,eP8,'class',4,e,s,gg)
cs.push("./packageComponent/pages/view/scroll-view/scroll-view.wxml:view:9:6")
var bQ8=_n('view')
_rz(z,bQ8,'class',5,e,s,gg)
cs.push("./packageComponent/pages/view/scroll-view/scroll-view.wxml:view:10:8")
var oR8=_n('view')
_rz(z,oR8,'class',6,e,s,gg)
cs.push("./packageComponent/pages/view/scroll-view/scroll-view.wxml:text:11:10")
var xS8=_n('text')
var oT8=_oz(z,7,e,s,gg)
_(xS8,oT8)
cs.pop()
_(oR8,xS8)
cs.pop()
_(bQ8,oR8)
cs.push("./packageComponent/pages/view/scroll-view/scroll-view.wxml:view:13:8")
var fU8=_n('view')
_rz(z,fU8,'class',8,e,s,gg)
cs.push("./packageComponent/pages/view/scroll-view/scroll-view.wxml:scroll-view:14:10")
var cV8=_mz(z,'scroll-view',['bindscroll',9,'bindscrolltolower',1,'bindscrolltoupper',2,'scrollIntoView',3,'scrollTop',4,'scrollY',5,'style',6],[],e,s,gg)
cs.push("./packageComponent/pages/view/scroll-view/scroll-view.wxml:view:15:12")
var hW8=_mz(z,'view',['class',16,'id',1],[],e,s,gg)
cs.pop()
_(cV8,hW8)
cs.push("./packageComponent/pages/view/scroll-view/scroll-view.wxml:view:16:12")
var oX8=_mz(z,'view',['class',18,'id',1],[],e,s,gg)
cs.pop()
_(cV8,oX8)
cs.push("./packageComponent/pages/view/scroll-view/scroll-view.wxml:view:17:12")
var cY8=_mz(z,'view',['class',20,'id',1],[],e,s,gg)
cs.pop()
_(cV8,cY8)
cs.pop()
_(fU8,cV8)
cs.pop()
_(bQ8,fU8)
cs.pop()
_(eP8,bQ8)
cs.push("./packageComponent/pages/view/scroll-view/scroll-view.wxml:view:21:6")
var oZ8=_n('view')
_rz(z,oZ8,'class',22,e,s,gg)
cs.push("./packageComponent/pages/view/scroll-view/scroll-view.wxml:view:22:8")
var l18=_n('view')
_rz(z,l18,'class',23,e,s,gg)
cs.push("./packageComponent/pages/view/scroll-view/scroll-view.wxml:text:23:10")
var a28=_n('text')
var t38=_oz(z,24,e,s,gg)
_(a28,t38)
cs.pop()
_(l18,a28)
cs.pop()
_(oZ8,l18)
cs.push("./packageComponent/pages/view/scroll-view/scroll-view.wxml:view:25:8")
var e48=_n('view')
_rz(z,e48,'class',25,e,s,gg)
cs.push("./packageComponent/pages/view/scroll-view/scroll-view.wxml:scroll-view:26:10")
var b58=_mz(z,'scroll-view',['bindscroll',26,'class',1,'scrollX',2,'style',3],[],e,s,gg)
cs.push("./packageComponent/pages/view/scroll-view/scroll-view.wxml:view:27:12")
var o68=_mz(z,'view',['class',30,'id',1],[],e,s,gg)
cs.pop()
_(b58,o68)
cs.push("./packageComponent/pages/view/scroll-view/scroll-view.wxml:view:28:12")
var x78=_mz(z,'view',['class',32,'id',1],[],e,s,gg)
cs.pop()
_(b58,x78)
cs.push("./packageComponent/pages/view/scroll-view/scroll-view.wxml:view:29:12")
var o88=_mz(z,'view',['class',34,'id',1],[],e,s,gg)
cs.pop()
_(b58,o88)
cs.pop()
_(e48,b58)
cs.pop()
_(oZ8,e48)
cs.pop()
_(eP8,oZ8)
cs.push("./packageComponent/pages/view/scroll-view/scroll-view.wxml:view:33:6")
var f98=_n('view')
_rz(z,f98,'class',36,e,s,gg)
cs.push("./packageComponent/pages/view/scroll-view/scroll-view.wxml:view:34:8")
var c08=_n('view')
_rz(z,c08,'class',37,e,s,gg)
cs.push("./packageComponent/pages/view/scroll-view/scroll-view.wxml:text:35:10")
var hA9=_n('text')
var oB9=_oz(z,38,e,s,gg)
_(hA9,oB9)
cs.pop()
_(c08,hA9)
cs.pop()
_(f98,c08)
cs.push("./packageComponent/pages/view/scroll-view/scroll-view.wxml:view:37:8")
var cC9=_n('view')
_rz(z,cC9,'class',39,e,s,gg)
cs.push("./packageComponent/pages/view/scroll-view/scroll-view.wxml:scroll-view:38:10")
var oD9=_mz(z,'scroll-view',['scrollY',-1,'bindrefresherpulling',40,'refresherBackground',1,'refresherDefaultStyle',2,'refresherEnabled',3,'refresherThreshold',4,'style',5],[],e,s,gg)
cs.push("./packageComponent/pages/view/scroll-view/scroll-view.wxml:view:46:12")
var lE9=_mz(z,'view',['class',46,'slot',1,'style',2],[],e,s,gg)
cs.push("./packageComponent/pages/view/scroll-view/scroll-view.wxml:view:49:14")
var aF9=_mz(z,'view',['class',49,'style',1],[],e,s,gg)
var tG9=_oz(z,51,e,s,gg)
_(aF9,tG9)
cs.pop()
_(lE9,aF9)
cs.pop()
_(oD9,lE9)
cs.push("./packageComponent/pages/view/scroll-view/scroll-view.wxml:view:54:12")
var eH9=_mz(z,'view',['class',52,'id',1],[],e,s,gg)
cs.pop()
_(oD9,eH9)
cs.push("./packageComponent/pages/view/scroll-view/scroll-view.wxml:view:55:12")
var bI9=_mz(z,'view',['class',54,'id',1],[],e,s,gg)
cs.pop()
_(oD9,bI9)
cs.push("./packageComponent/pages/view/scroll-view/scroll-view.wxml:view:56:12")
var oJ9=_mz(z,'view',['class',56,'id',1],[],e,s,gg)
cs.pop()
_(oD9,oJ9)
cs.pop()
_(cC9,oD9)
cs.pop()
_(f98,cC9)
cs.pop()
_(eP8,f98)
cs.push("./packageComponent/pages/view/scroll-view/scroll-view.wxml:view:60:6")
var xK9=_n('view')
_rz(z,xK9,'class',58,e,s,gg)
cs.push("./packageComponent/pages/view/scroll-view/scroll-view.wxml:view:61:8")
var oL9=_n('view')
_rz(z,oL9,'class',59,e,s,gg)
cs.push("./packageComponent/pages/view/scroll-view/scroll-view.wxml:text:62:10")
var fM9=_n('text')
var cN9=_oz(z,60,e,s,gg)
_(fM9,cN9)
cs.pop()
_(oL9,fM9)
cs.pop()
_(xK9,oL9)
cs.push("./packageComponent/pages/view/scroll-view/scroll-view.wxml:view:64:8")
var hO9=_n('view')
_rz(z,hO9,'class',61,e,s,gg)
cs.push("./packageComponent/pages/view/scroll-view/scroll-view.wxml:scroll-view:65:10")
var oP9=_mz(z,'scroll-view',['scrollY',-1,'bindrefresherabort',62,'bindrefresherpulling',1,'bindrefresherrefresh',2,'bindrefresherrestore',3,'refresherBackground',4,'refresherDefaultStyle',5,'refresherEnabled',6,'refresherThreshold',7,'refresherTriggered',8,'style',9],[],e,s,gg)
cs.push("./packageComponent/pages/view/scroll-view/scroll-view.wxml:view:77:12")
var cQ9=_mz(z,'view',['class',72,'id',1],[],e,s,gg)
cs.pop()
_(oP9,cQ9)
cs.push("./packageComponent/pages/view/scroll-view/scroll-view.wxml:view:78:12")
var oR9=_mz(z,'view',['class',74,'id',1],[],e,s,gg)
cs.pop()
_(oP9,oR9)
cs.push("./packageComponent/pages/view/scroll-view/scroll-view.wxml:view:79:12")
var lS9=_mz(z,'view',['class',76,'id',1],[],e,s,gg)
cs.pop()
_(oP9,lS9)
cs.pop()
_(hO9,oP9)
cs.pop()
_(xK9,hO9)
cs.pop()
_(eP8,xK9)
cs.push("./packageComponent/pages/view/scroll-view/scroll-view.wxml:view:83:6")
var aT9=_n('view')
_rz(z,aT9,'class',78,e,s,gg)
cs.push("./packageComponent/pages/view/scroll-view/scroll-view.wxml:view:84:8")
var tU9=_n('view')
_rz(z,tU9,'class',79,e,s,gg)
cs.push("./packageComponent/pages/view/scroll-view/scroll-view.wxml:text:85:10")
var eV9=_n('text')
var bW9=_oz(z,80,e,s,gg)
_(eV9,bW9)
cs.pop()
_(tU9,eV9)
cs.pop()
_(aT9,tU9)
cs.push("./packageComponent/pages/view/scroll-view/scroll-view.wxml:view:87:8")
var oX9=_n('view')
_rz(z,oX9,'class',81,e,s,gg)
cs.push("./packageComponent/pages/view/scroll-view/scroll-view.wxml:scroll-view:88:10")
var xY9=_mz(z,'scroll-view',['bindscroll',82,'bindscrolltolower',1,'bindscrolltoupper',2,'id',3,'scrollIntoView',4,'scrollTop',5,'scrollY',6,'style',7],[],e,s,gg)
cs.push("./packageComponent/pages/view/scroll-view/scroll-view.wxml:view:89:12")
var oZ9=_mz(z,'view',['class',90,'id',1],[],e,s,gg)
cs.pop()
_(xY9,oZ9)
cs.push("./packageComponent/pages/view/scroll-view/scroll-view.wxml:view:90:12")
var f19=_mz(z,'view',['class',92,'id',1],[],e,s,gg)
cs.pop()
_(xY9,f19)
cs.push("./packageComponent/pages/view/scroll-view/scroll-view.wxml:view:91:12")
var c29=_mz(z,'view',['class',94,'id',1],[],e,s,gg)
cs.pop()
_(xY9,c29)
cs.pop()
_(oX9,xY9)
cs.pop()
_(aT9,oX9)
cs.pop()
_(eP8,aT9)
cs.pop()
_(cK8,eP8)
var h39=_v()
_(cK8,h39)
cs.push("./packageComponent/pages/view/scroll-view/scroll-view.wxml:template:96:4")
var o49=_oz(z,96,e,s,gg)
var c59=_gd(x[37],o49,e_,d_)
if(c59){
var o69={}
var cur_globalf=gg.f
h39.wxXCkey=3
c59(o69,o69,h39,gg)
gg.f=cur_globalf
}
else _w(o49,x[37],96,16)
cs.pop()
cs.pop()
_(r,cK8)
oJ8.pop()
oJ8.pop()
return r
}
e_[x[37]]={f:m35,j:[],i:[],ti:[x[5],x[6]],ic:[]}
d_[x[38]]={}
var m36=function(e,s,r,gg){
var z=gz$7061636b616765436f6d706f6e656e742f_37()
var a89=e_[x[38]].i
_ai(a89,x[5],e_,x[38],1,1)
_ai(a89,x[6],e_,x[38],2,2)
cs.push("./packageComponent/pages/view/swiper/swiper.wxml:view:4:2")
var t99=_mz(z,'view',['class',0,'data-weui-theme',1],[],e,s,gg)
var e09=_v()
_(t99,e09)
cs.push("./packageComponent/pages/view/swiper/swiper.wxml:template:5:4")
var bA0=_oz(z,3,e,s,gg)
var oB0=_gd(x[38],bA0,e_,d_)
if(oB0){
var xC0=_1z(z,2,e,s,gg) || {}
var cur_globalf=gg.f
e09.wxXCkey=3
oB0(xC0,xC0,e09,gg)
gg.f=cur_globalf
}
else _w(bA0,x[38],5,16)
cs.pop()
cs.push("./packageComponent/pages/view/swiper/swiper.wxml:view:7:4")
var oD0=_n('view')
_rz(z,oD0,'class',4,e,s,gg)
cs.push("./packageComponent/pages/view/swiper/swiper.wxml:view:8:6")
var fE0=_n('view')
_rz(z,fE0,'class',5,e,s,gg)
cs.push("./packageComponent/pages/view/swiper/swiper.wxml:swiper:9:8")
var cF0=_mz(z,'swiper',['autoplay',6,'duration',1,'indicatorDots',2,'interval',3],[],e,s,gg)
var hG0=_v()
_(cF0,hG0)
cs.push("./packageComponent/pages/view/swiper/swiper.wxml:block:11:10")
var oH0=function(oJ0,cI0,lK0,gg){
cs.push("./packageComponent/pages/view/swiper/swiper.wxml:block:11:10")
cs.push("./packageComponent/pages/view/swiper/swiper.wxml:swiper-item:12:12")
var tM0=_n('swiper-item')
cs.push("./packageComponent/pages/view/swiper/swiper.wxml:view:13:14")
var eN0=_n('view')
_rz(z,eN0,'class',12,oJ0,cI0,gg)
cs.pop()
_(tM0,eN0)
cs.pop()
_(lK0,tM0)
cs.pop()
return lK0
}
hG0.wxXCkey=2
_2z(z,10,oH0,e,s,gg,hG0,'item','index','*this')
cs.pop()
cs.pop()
_(fE0,cF0)
cs.pop()
_(oD0,fE0)
cs.push("./packageComponent/pages/view/swiper/swiper.wxml:view:18:6")
var bO0=_mz(z,'view',['class',13,'style',1],[],e,s,gg)
cs.push("./packageComponent/pages/view/swiper/swiper.wxml:view:19:8")
var oP0=_n('view')
_rz(z,oP0,'class',15,e,s,gg)
cs.push("./packageComponent/pages/view/swiper/swiper.wxml:view:20:10")
var xQ0=_n('view')
_rz(z,xQ0,'class',16,e,s,gg)
cs.push("./packageComponent/pages/view/swiper/swiper.wxml:view:21:12")
var oR0=_n('view')
_rz(z,oR0,'class',17,e,s,gg)
var fS0=_oz(z,18,e,s,gg)
_(oR0,fS0)
cs.pop()
_(xQ0,oR0)
cs.push("./packageComponent/pages/view/swiper/swiper.wxml:view:22:12")
var cT0=_n('view')
_rz(z,cT0,'class',19,e,s,gg)
cs.push("./packageComponent/pages/view/swiper/swiper.wxml:switch:23:14")
var hU0=_mz(z,'switch',['bindchange',20,'checked',1],[],e,s,gg)
cs.pop()
_(cT0,hU0)
cs.pop()
_(xQ0,cT0)
cs.pop()
_(oP0,xQ0)
cs.push("./packageComponent/pages/view/swiper/swiper.wxml:view:26:10")
var oV0=_n('view')
_rz(z,oV0,'class',22,e,s,gg)
cs.push("./packageComponent/pages/view/swiper/swiper.wxml:view:27:12")
var cW0=_n('view')
_rz(z,cW0,'class',23,e,s,gg)
var oX0=_oz(z,24,e,s,gg)
_(cW0,oX0)
cs.pop()
_(oV0,cW0)
cs.push("./packageComponent/pages/view/swiper/swiper.wxml:view:28:12")
var lY0=_n('view')
_rz(z,lY0,'class',25,e,s,gg)
cs.push("./packageComponent/pages/view/swiper/swiper.wxml:switch:29:14")
var aZ0=_mz(z,'switch',['bindchange',26,'checked',1],[],e,s,gg)
cs.pop()
_(lY0,aZ0)
cs.pop()
_(oV0,lY0)
cs.pop()
_(oP0,oV0)
cs.pop()
_(bO0,oP0)
cs.pop()
_(oD0,bO0)
cs.push("./packageComponent/pages/view/swiper/swiper.wxml:view:35:6")
var t10=_n('view')
_rz(z,t10,'class',28,e,s,gg)
cs.push("./packageComponent/pages/view/swiper/swiper.wxml:view:36:8")
var e20=_n('view')
_rz(z,e20,'class',29,e,s,gg)
cs.push("./packageComponent/pages/view/swiper/swiper.wxml:text:37:10")
var b30=_n('text')
var o40=_oz(z,30,e,s,gg)
_(b30,o40)
cs.pop()
_(e20,b30)
cs.push("./packageComponent/pages/view/swiper/swiper.wxml:text:38:10")
var x50=_n('text')
_rz(z,x50,'class',31,e,s,gg)
var o60=_oz(z,32,e,s,gg)
_(x50,o60)
cs.pop()
_(e20,x50)
cs.pop()
_(t10,e20)
cs.push("./packageComponent/pages/view/swiper/swiper.wxml:slider:40:8")
var f70=_mz(z,'slider',['bindchange',33,'max',1,'min',2,'value',3],[],e,s,gg)
cs.pop()
_(t10,f70)
cs.push("./packageComponent/pages/view/swiper/swiper.wxml:view:41:8")
var c80=_n('view')
_rz(z,c80,'class',37,e,s,gg)
cs.push("./packageComponent/pages/view/swiper/swiper.wxml:text:42:10")
var h90=_n('text')
var o00=_oz(z,38,e,s,gg)
_(h90,o00)
cs.pop()
_(c80,h90)
cs.push("./packageComponent/pages/view/swiper/swiper.wxml:text:43:10")
var cAAB=_n('text')
_rz(z,cAAB,'class',39,e,s,gg)
var oBAB=_oz(z,40,e,s,gg)
_(cAAB,oBAB)
cs.pop()
_(c80,cAAB)
cs.pop()
_(t10,c80)
cs.push("./packageComponent/pages/view/swiper/swiper.wxml:slider:45:8")
var lCAB=_mz(z,'slider',['bindchange',41,'max',1,'min',2,'value',3],[],e,s,gg)
cs.pop()
_(t10,lCAB)
cs.pop()
_(oD0,t10)
cs.pop()
_(t99,oD0)
var aDAB=_v()
_(t99,aDAB)
cs.push("./packageComponent/pages/view/swiper/swiper.wxml:template:49:4")
var tEAB=_oz(z,45,e,s,gg)
var eFAB=_gd(x[38],tEAB,e_,d_)
if(eFAB){
var bGAB={}
var cur_globalf=gg.f
aDAB.wxXCkey=3
eFAB(bGAB,bGAB,aDAB,gg)
gg.f=cur_globalf
}
else _w(tEAB,x[38],49,16)
cs.pop()
cs.pop()
_(r,t99)
a89.pop()
a89.pop()
return r
}
e_[x[38]]={f:m36,j:[],i:[],ti:[x[5],x[6]],ic:[]}
d_[x[39]]={}
var m37=function(e,s,r,gg){
var z=gz$7061636b616765436f6d706f6e656e742f_38()
var xIAB=e_[x[39]].i
_ai(xIAB,x[5],e_,x[39],1,1)
_ai(xIAB,x[6],e_,x[39],2,2)
cs.push("./packageComponent/pages/view/view/view.wxml:view:4:2")
var oJAB=_mz(z,'view',['class',0,'data-weui-theme',1],[],e,s,gg)
var fKAB=_v()
_(oJAB,fKAB)
cs.push("./packageComponent/pages/view/view/view.wxml:template:5:4")
var cLAB=_oz(z,3,e,s,gg)
var hMAB=_gd(x[39],cLAB,e_,d_)
if(hMAB){
var oNAB=_1z(z,2,e,s,gg) || {}
var cur_globalf=gg.f
fKAB.wxXCkey=3
hMAB(oNAB,oNAB,fKAB,gg)
gg.f=cur_globalf
}
else _w(cLAB,x[39],5,16)
cs.pop()
cs.push("./packageComponent/pages/view/view/view.wxml:view:6:4")
var cOAB=_n('view')
_rz(z,cOAB,'class',4,e,s,gg)
cs.push("./packageComponent/pages/view/view/view.wxml:view:7:6")
var oPAB=_n('view')
_rz(z,oPAB,'class',5,e,s,gg)
cs.push("./packageComponent/pages/view/view/view.wxml:view:8:8")
var lQAB=_n('view')
_rz(z,lQAB,'class',6,e,s,gg)
cs.push("./packageComponent/pages/view/view/view.wxml:text:9:10")
var aRAB=_n('text')
var tSAB=_oz(z,7,e,s,gg)
_(aRAB,tSAB)
cs.pop()
_(lQAB,aRAB)
cs.pop()
_(oPAB,lQAB)
cs.push("./packageComponent/pages/view/view/view.wxml:view:11:8")
var eTAB=_n('view')
_rz(z,eTAB,'class',8,e,s,gg)
cs.push("./packageComponent/pages/view/view/view.wxml:view:12:10")
var bUAB=_mz(z,'view',['class',9,'style',1],[],e,s,gg)
cs.push("./packageComponent/pages/view/view/view.wxml:view:13:12")
var oVAB=_n('view')
_rz(z,oVAB,'class',11,e,s,gg)
cs.pop()
_(bUAB,oVAB)
cs.push("./packageComponent/pages/view/view/view.wxml:view:14:12")
var xWAB=_n('view')
_rz(z,xWAB,'class',12,e,s,gg)
cs.pop()
_(bUAB,xWAB)
cs.push("./packageComponent/pages/view/view/view.wxml:view:15:12")
var oXAB=_n('view')
_rz(z,oXAB,'class',13,e,s,gg)
cs.pop()
_(bUAB,oXAB)
cs.pop()
_(eTAB,bUAB)
cs.pop()
_(oPAB,eTAB)
cs.pop()
_(cOAB,oPAB)
cs.push("./packageComponent/pages/view/view/view.wxml:view:19:6")
var fYAB=_n('view')
_rz(z,fYAB,'class',14,e,s,gg)
cs.push("./packageComponent/pages/view/view/view.wxml:view:20:8")
var cZAB=_n('view')
_rz(z,cZAB,'class',15,e,s,gg)
cs.push("./packageComponent/pages/view/view/view.wxml:text:21:10")
var h1AB=_n('text')
var o2AB=_oz(z,16,e,s,gg)
_(h1AB,o2AB)
cs.pop()
_(cZAB,h1AB)
cs.pop()
_(fYAB,cZAB)
cs.push("./packageComponent/pages/view/view/view.wxml:view:23:8")
var c3AB=_mz(z,'view',['class',17,'style',1],[],e,s,gg)
cs.push("./packageComponent/pages/view/view/view.wxml:view:24:10")
var o4AB=_n('view')
_rz(z,o4AB,'class',19,e,s,gg)
cs.pop()
_(c3AB,o4AB)
cs.push("./packageComponent/pages/view/view/view.wxml:view:25:10")
var l5AB=_n('view')
_rz(z,l5AB,'class',20,e,s,gg)
cs.pop()
_(c3AB,l5AB)
cs.push("./packageComponent/pages/view/view/view.wxml:view:26:10")
var a6AB=_n('view')
_rz(z,a6AB,'class',21,e,s,gg)
cs.pop()
_(c3AB,a6AB)
cs.pop()
_(fYAB,c3AB)
cs.pop()
_(cOAB,fYAB)
cs.pop()
_(oJAB,cOAB)
var t7AB=_v()
_(oJAB,t7AB)
cs.push("./packageComponent/pages/view/view/view.wxml:template:30:4")
var e8AB=_oz(z,22,e,s,gg)
var b9AB=_gd(x[39],e8AB,e_,d_)
if(b9AB){
var o0AB={}
var cur_globalf=gg.f
t7AB.wxXCkey=3
b9AB(o0AB,o0AB,t7AB,gg)
gg.f=cur_globalf
}
else _w(e8AB,x[39],30,16)
cs.pop()
cs.pop()
_(r,oJAB)
xIAB.pop()
xIAB.pop()
return r
}
e_[x[39]]={f:m37,j:[],i:[],ti:[x[5],x[6]],ic:[]}
d_[x[40]]={}
var m38=function(e,s,r,gg){
var z=gz$7061636b616765436f6d706f6e656e742f_39()
var oBBB=e_[x[40]].i
_ai(oBBB,x[5],e_,x[40],1,1)
_ai(oBBB,x[6],e_,x[40],2,2)
cs.push("./page/API/components/set-tab-bar/set-tab-bar.wxml:view:4:2")
var fCBB=_mz(z,'view',['class',0,'data-weui-theme',1],[],e,s,gg)
var cDBB=_v()
_(fCBB,cDBB)
cs.push("./page/API/components/set-tab-bar/set-tab-bar.wxml:template:5:4")
var hEBB=_oz(z,3,e,s,gg)
var oFBB=_gd(x[40],hEBB,e_,d_)
if(oFBB){
var cGBB=_1z(z,2,e,s,gg) || {}
var cur_globalf=gg.f
cDBB.wxXCkey=3
oFBB(cGBB,cGBB,cDBB,gg)
gg.f=cur_globalf
}
else _w(hEBB,x[40],5,16)
cs.pop()
cs.push("./page/API/components/set-tab-bar/set-tab-bar.wxml:view:7:4")
var oHBB=_n('view')
_rz(z,oHBB,'class',4,e,s,gg)
cs.push("./page/API/components/set-tab-bar/set-tab-bar.wxml:view:8:6")
var lIBB=_n('view')
_rz(z,lIBB,'class',5,e,s,gg)
cs.push("./page/API/components/set-tab-bar/set-tab-bar.wxml:button:9:8")
var aJBB=_n('button')
_rz(z,aJBB,'bindtap',6,e,s,gg)
var tKBB=_oz(z,7,e,s,gg)
_(aJBB,tKBB)
cs.pop()
_(lIBB,aJBB)
cs.push("./page/API/components/set-tab-bar/set-tab-bar.wxml:button:12:8")
var eLBB=_n('button')
_rz(z,eLBB,'bindtap',8,e,s,gg)
var bMBB=_oz(z,9,e,s,gg)
_(eLBB,bMBB)
cs.pop()
_(lIBB,eLBB)
cs.push("./page/API/components/set-tab-bar/set-tab-bar.wxml:button:15:8")
var oNBB=_n('button')
_rz(z,oNBB,'bindtap',10,e,s,gg)
var xOBB=_oz(z,11,e,s,gg)
_(oNBB,xOBB)
cs.pop()
_(lIBB,oNBB)
cs.push("./page/API/components/set-tab-bar/set-tab-bar.wxml:button:18:8")
var oPBB=_n('button')
_rz(z,oPBB,'bindtap',12,e,s,gg)
var fQBB=_oz(z,13,e,s,gg)
_(oPBB,fQBB)
cs.pop()
_(lIBB,oPBB)
cs.push("./page/API/components/set-tab-bar/set-tab-bar.wxml:button:21:8")
var cRBB=_n('button')
_rz(z,cRBB,'bindtap',14,e,s,gg)
var hSBB=_oz(z,15,e,s,gg)
_(cRBB,hSBB)
cs.pop()
_(lIBB,cRBB)
cs.pop()
_(oHBB,lIBB)
cs.push("./page/API/components/set-tab-bar/set-tab-bar.wxml:view:26:6")
var oTBB=_n('view')
_rz(z,oTBB,'class',16,e,s,gg)
cs.push("./page/API/components/set-tab-bar/set-tab-bar.wxml:button:27:8")
var cUBB=_mz(z,'button',['bindtap',17,'type',1],[],e,s,gg)
var oVBB=_oz(z,19,e,s,gg)
_(cUBB,oVBB)
cs.pop()
_(oTBB,cUBB)
cs.pop()
_(oHBB,oTBB)
cs.pop()
_(fCBB,oHBB)
var lWBB=_v()
_(fCBB,lWBB)
cs.push("./page/API/components/set-tab-bar/set-tab-bar.wxml:template:31:4")
var aXBB=_oz(z,20,e,s,gg)
var tYBB=_gd(x[40],aXBB,e_,d_)
if(tYBB){
var eZBB={}
var cur_globalf=gg.f
lWBB.wxXCkey=3
tYBB(eZBB,eZBB,lWBB,gg)
gg.f=cur_globalf
}
else _w(aXBB,x[40],31,16)
cs.pop()
cs.pop()
_(r,fCBB)
oBBB.pop()
oBBB.pop()
return r
}
e_[x[40]]={f:m38,j:[],i:[],ti:[x[5],x[6]],ic:[]}
d_[x[41]]={}
var m39=function(e,s,r,gg){
var z=gz$7061636b616765436f6d706f6e656e742f_40()
var o2BB=_v()
_(r,o2BB)
if(_oz(z,0,e,s,gg)){o2BB.wxVkey=1
cs.push("./page/API/index.wxml:set-tab-bar:1:1")
cs.push("./page/API/index.wxml:set-tab-bar:1:1")
var x3BB=_n('set-tab-bar')
_rz(z,x3BB,'bindunmount',1,e,s,gg)
cs.pop()
_(o2BB,x3BB)
cs.pop()
}
else{o2BB.wxVkey=2
cs.push("./page/API/index.wxml:view:2:2")
cs.push("./page/API/index.wxml:view:2:2")
var o4BB=_mz(z,'view',['class',2,'data-weui-theme',1],[],e,s,gg)
cs.push("./page/API/index.wxml:view:3:4")
var f5BB=_n('view')
_rz(z,f5BB,'class',4,e,s,gg)
cs.push("./page/API/index.wxml:image:4:6")
var c6BB=_mz(z,'image',['class',5,'src',1],[],e,s,gg)
cs.pop()
_(f5BB,c6BB)
cs.push("./page/API/index.wxml:view:5:6")
var h7BB=_n('view')
_rz(z,h7BB,'class',7,e,s,gg)
var o8BB=_oz(z,8,e,s,gg)
_(h7BB,o8BB)
cs.push("./page/API/index.wxml:navigator:5:95")
var c9BB=_mz(z,'navigator',['class',9,'url',1],[],e,s,gg)
var o0BB=_oz(z,11,e,s,gg)
_(c9BB,o0BB)
cs.pop()
_(h7BB,c9BB)
var lACB=_oz(z,12,e,s,gg)
_(h7BB,lACB)
cs.pop()
_(f5BB,h7BB)
cs.pop()
_(o4BB,f5BB)
cs.push("./page/API/index.wxml:view:7:4")
var aBCB=_n('view')
_rz(z,aBCB,'class',13,e,s,gg)
cs.push("./page/API/index.wxml:view:8:6")
var tCCB=_n('view')
_rz(z,tCCB,'class',14,e,s,gg)
var eDCB=_v()
_(tCCB,eDCB)
cs.push("./page/API/index.wxml:block:9:8")
var bECB=function(xGCB,oFCB,oHCB,gg){
cs.push("./page/API/index.wxml:block:9:8")
cs.push("./page/API/index.wxml:view:10:10")
var cJCB=_n('view')
_rz(z,cJCB,'class',17,xGCB,oFCB,gg)
cs.push("./page/API/index.wxml:view:11:12")
var hKCB=_mz(z,'view',['bindtap',18,'class',1,'id',2],[],xGCB,oFCB,gg)
cs.push("./page/API/index.wxml:view:12:14")
var cMCB=_n('view')
_rz(z,cMCB,'class',21,xGCB,oFCB,gg)
var oNCB=_oz(z,22,xGCB,oFCB,gg)
_(cMCB,oNCB)
cs.pop()
_(hKCB,cMCB)
var oLCB=_v()
_(hKCB,oLCB)
if(_oz(z,23,xGCB,oFCB,gg)){oLCB.wxVkey=1
cs.push("./page/API/index.wxml:image:13:14")
cs.push("./page/API/index.wxml:image:13:14")
var lOCB=_mz(z,'image',['class',24,'src',1],[],xGCB,oFCB,gg)
cs.pop()
_(oLCB,lOCB)
cs.pop()
}
else{oLCB.wxVkey=2
cs.push("./page/API/index.wxml:image:14:14")
cs.push("./page/API/index.wxml:image:14:14")
var aPCB=_mz(z,'image',['class',26,'src',1],[],xGCB,oFCB,gg)
cs.pop()
_(oLCB,aPCB)
cs.pop()
}
oLCB.wxXCkey=1
cs.pop()
_(cJCB,hKCB)
cs.push("./page/API/index.wxml:view:16:12")
var tQCB=_n('view')
_rz(z,tQCB,'class',28,xGCB,oFCB,gg)
cs.push("./page/API/index.wxml:view:17:14")
var eRCB=_n('view')
_rz(z,eRCB,'class',29,xGCB,oFCB,gg)
var bSCB=_v()
_(eRCB,bSCB)
cs.push("./page/API/index.wxml:block:18:16")
var oTCB=function(oVCB,xUCB,fWCB,gg){
cs.push("./page/API/index.wxml:block:18:16")
var hYCB=_v()
_(fWCB,hYCB)
if(_oz(z,33,oVCB,xUCB,gg)){hYCB.wxVkey=1
cs.push("./page/API/index.wxml:navigator:19:18")
cs.push("./page/API/index.wxml:navigator:19:18")
var oZCB=_mz(z,'navigator',['class',34,'url',1],[],oVCB,xUCB,gg)
cs.push("./page/API/index.wxml:view:20:20")
var c1CB=_n('view')
_rz(z,c1CB,'class',36,oVCB,xUCB,gg)
var o2CB=_oz(z,37,oVCB,xUCB,gg)
_(c1CB,o2CB)
cs.pop()
_(oZCB,c1CB)
cs.push("./page/API/index.wxml:view:21:20")
var l3CB=_n('view')
_rz(z,l3CB,'class',38,oVCB,xUCB,gg)
cs.pop()
_(oZCB,l3CB)
cs.pop()
_(hYCB,oZCB)
cs.pop()
}
else{hYCB.wxVkey=2
cs.push("./page/API/index.wxml:view:23:18")
cs.push("./page/API/index.wxml:view:23:18")
var a4CB=_mz(z,'view',['bindtap',39,'class',1],[],oVCB,xUCB,gg)
cs.push("./page/API/index.wxml:view:24:20")
var t5CB=_n('view')
_rz(z,t5CB,'class',41,oVCB,xUCB,gg)
var e6CB=_oz(z,42,oVCB,xUCB,gg)
_(t5CB,e6CB)
cs.pop()
_(a4CB,t5CB)
cs.push("./page/API/index.wxml:view:25:20")
var b7CB=_n('view')
_rz(z,b7CB,'class',43,oVCB,xUCB,gg)
cs.pop()
_(a4CB,b7CB)
cs.pop()
_(hYCB,a4CB)
cs.pop()
}
hYCB.wxXCkey=1
cs.pop()
return fWCB
}
_wp('./page/API/index.wxml:block:18:16: wx:key="*item" does not look like a valid key name.')
bSCB.wxXCkey=2
_2z(z,31,oTCB,xGCB,oFCB,gg,bSCB,'page','index','*item')
cs.pop()
cs.pop()
_(tQCB,eRCB)
cs.pop()
_(cJCB,tQCB)
cs.pop()
_(oHCB,cJCB)
cs.pop()
return oHCB
}
_wp('./page/API/index.wxml:block:9:8: wx:key="{{item.id}}" does not look like a valid key name (did you mean wx:key="id" ?)')
eDCB.wxXCkey=2
_2z(z,15,bECB,e,s,gg,eDCB,'item','index','{{item.id}}')
cs.pop()
cs.pop()
_(aBCB,tCCB)
cs.pop()
_(o4BB,aBCB)
cs.pop()
_(o2BB,o4BB)
cs.pop()
}
o2BB.wxXCkey=1
return r
}
e_[x[41]]={f:m39,j:[],i:[],ti:[],ic:[]}
d_[x[42]]={}
var m40=function(e,s,r,gg){
var z=gz$7061636b616765436f6d706f6e656e742f_41()
cs.push("./page/cloud/index.wxml:view:1:1")
var x9CB=_mz(z,'view',['class',0,'data-weui-theme',1],[],e,s,gg)
cs.push("./page/cloud/index.wxml:view:2:4")
var o0CB=_n('view')
_rz(z,o0CB,'class',2,e,s,gg)
cs.push("./page/cloud/index.wxml:view:3:6")
var fADB=_n('view')
_rz(z,fADB,'class',3,e,s,gg)
cs.push("./page/cloud/index.wxml:image:4:8")
var cBDB=_mz(z,'image',['class',4,'src',1],[],e,s,gg)
cs.pop()
_(fADB,cBDB)
cs.push("./page/cloud/index.wxml:view:5:8")
var hCDB=_n('view')
_rz(z,hCDB,'class',6,e,s,gg)
var oDDB=_oz(z,7,e,s,gg)
_(hCDB,oDDB)
cs.push("./page/cloud/index.wxml:navigator:5:100")
var cEDB=_mz(z,'navigator',['class',8,'url',1],[],e,s,gg)
var oFDB=_oz(z,10,e,s,gg)
_(cEDB,oFDB)
cs.pop()
_(hCDB,cEDB)
var lGDB=_oz(z,11,e,s,gg)
_(hCDB,lGDB)
cs.pop()
_(fADB,hCDB)
cs.pop()
_(o0CB,fADB)
cs.push("./page/cloud/index.wxml:view:7:6")
var aHDB=_n('view')
_rz(z,aHDB,'class',12,e,s,gg)
cs.push("./page/cloud/index.wxml:view:8:8")
var tIDB=_n('view')
_rz(z,tIDB,'class',13,e,s,gg)
var eJDB=_v()
_(tIDB,eJDB)
cs.push("./page/cloud/index.wxml:block:9:10")
var bKDB=function(xMDB,oLDB,oNDB,gg){
cs.push("./page/cloud/index.wxml:block:9:10")
cs.push("./page/cloud/index.wxml:view:10:12")
var cPDB=_n('view')
_rz(z,cPDB,'class',16,xMDB,oLDB,gg)
cs.push("./page/cloud/index.wxml:view:11:14")
var hQDB=_mz(z,'view',['bindtap',17,'class',1,'id',2],[],xMDB,oLDB,gg)
cs.push("./page/cloud/index.wxml:view:12:16")
var cSDB=_n('view')
_rz(z,cSDB,'class',20,xMDB,oLDB,gg)
var oTDB=_oz(z,21,xMDB,oLDB,gg)
_(cSDB,oTDB)
cs.pop()
_(hQDB,cSDB)
var oRDB=_v()
_(hQDB,oRDB)
if(_oz(z,22,xMDB,oLDB,gg)){oRDB.wxVkey=1
cs.push("./page/cloud/index.wxml:image:13:16")
cs.push("./page/cloud/index.wxml:image:13:16")
var lUDB=_mz(z,'image',['class',23,'src',1],[],xMDB,oLDB,gg)
cs.pop()
_(oRDB,lUDB)
cs.pop()
}
else{oRDB.wxVkey=2
cs.push("./page/cloud/index.wxml:image:14:16")
cs.push("./page/cloud/index.wxml:image:14:16")
var aVDB=_mz(z,'image',['class',25,'src',1],[],xMDB,oLDB,gg)
cs.pop()
_(oRDB,aVDB)
cs.pop()
}
oRDB.wxXCkey=1
cs.pop()
_(cPDB,hQDB)
cs.push("./page/cloud/index.wxml:view:16:14")
var tWDB=_n('view')
_rz(z,tWDB,'class',27,xMDB,oLDB,gg)
cs.push("./page/cloud/index.wxml:view:17:16")
var eXDB=_n('view')
_rz(z,eXDB,'class',28,xMDB,oLDB,gg)
var bYDB=_v()
_(eXDB,bYDB)
cs.push("./page/cloud/index.wxml:block:18:18")
var oZDB=function(o2DB,x1DB,f3DB,gg){
cs.push("./page/cloud/index.wxml:block:18:18")
cs.push("./page/cloud/index.wxml:navigator:19:20")
var h5DB=_mz(z,'navigator',['class',32,'url',1],[],o2DB,x1DB,gg)
cs.push("./page/cloud/index.wxml:view:20:22")
var o6DB=_n('view')
_rz(z,o6DB,'class',34,o2DB,x1DB,gg)
var c7DB=_oz(z,35,o2DB,x1DB,gg)
_(o6DB,c7DB)
cs.pop()
_(h5DB,o6DB)
cs.push("./page/cloud/index.wxml:view:21:22")
var o8DB=_n('view')
_rz(z,o8DB,'class',36,o2DB,x1DB,gg)
cs.pop()
_(h5DB,o8DB)
cs.pop()
_(f3DB,h5DB)
cs.pop()
return f3DB
}
_wp('./page/cloud/index.wxml:block:18:18: wx:key="*item" does not look like a valid key name.')
bYDB.wxXCkey=2
_2z(z,30,oZDB,xMDB,oLDB,gg,bYDB,'page','index','*item')
cs.pop()
cs.pop()
_(tWDB,eXDB)
cs.pop()
_(cPDB,tWDB)
cs.pop()
_(oNDB,cPDB)
cs.pop()
return oNDB
}
_wp('./page/cloud/index.wxml:block:9:10: wx:key="{{item.id}}" does not look like a valid key name (did you mean wx:key="id" ?)')
eJDB.wxXCkey=2
_2z(z,14,bKDB,e,s,gg,eJDB,'item','index','{{item.id}}')
cs.pop()
cs.pop()
_(aHDB,tIDB)
cs.pop()
_(o0CB,aHDB)
cs.pop()
_(x9CB,o0CB)
cs.pop()
_(r,x9CB)
return r
}
e_[x[42]]={f:m40,j:[],i:[],ti:[],ic:[]}
d_[x[43]]={}
d_[x[43]]["foot"]=function(e,s,r,gg){
var z=gz$7061636b616765436f6d706f6e656e742f_42()
var b=x[43]+':foot'
r.wxVkey=b
gg.f=$gdc(f_["./page/common/foot.wxml"],"",1)
if(p_[b]){_wl(b,x[43]);return}
p_[b]=true
try{
cs.push("./page/common/foot.wxml:navigator:2:4")
var oB=_mz(z,'navigator',['class',1,'hoverClass',1,'openType',2,'url',3],[],e,s,gg)
cs.push("./page/common/foot.wxml:image:3:6")
var xC=_mz(z,'image',['class',5,'src',1],[],e,s,gg)
cs.pop()
_(oB,xC)
cs.pop()
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m41=function(e,s,r,gg){
var z=gz$7061636b616765436f6d706f6e656e742f_42()
return r
}
e_[x[43]]={f:m41,j:[],i:[],ti:[],ic:[]}
d_[x[44]]={}
d_[x[44]]["head"]=function(e,s,r,gg){
var z=gz$7061636b616765436f6d706f6e656e742f_43()
var b=x[44]+':head'
r.wxVkey=b
gg.f=$gdc(f_["./page/common/head.wxml"],"",1)
if(p_[b]){_wl(b,x[44]);return}
p_[b]=true
try{
cs.push("./page/common/head.wxml:view:2:4")
var oB=_n('view')
_rz(z,oB,'class',1,e,s,gg)
cs.push("./page/common/head.wxml:view:3:6")
var oD=_n('view')
_rz(z,oD,'class',2,e,s,gg)
var fE=_oz(z,3,e,s,gg)
_(oD,fE)
cs.pop()
_(oB,oD)
cs.push("./page/common/head.wxml:view:4:6")
var cF=_n('view')
_rz(z,cF,'class',4,e,s,gg)
cs.pop()
_(oB,cF)
var xC=_v()
_(oB,xC)
if(_oz(z,5,e,s,gg)){xC.wxVkey=1
cs.push("./page/common/head.wxml:view:5:6")
cs.push("./page/common/head.wxml:view:5:6")
var hG=_n('view')
_rz(z,hG,'class',6,e,s,gg)
var oH=_oz(z,7,e,s,gg)
_(hG,oH)
cs.pop()
_(xC,hG)
cs.pop()
}
xC.wxXCkey=1
cs.pop()
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m42=function(e,s,r,gg){
var z=gz$7061636b616765436f6d706f6e656e742f_43()
return r
}
e_[x[44]]={f:m42,j:[],i:[],ti:[],ic:[]}
d_[x[45]]={}
var m43=function(e,s,r,gg){
var z=gz$7061636b616765436f6d706f6e656e742f_44()
cs.push("./page/component/index.wxml:view:1:1")
var eBEB=_mz(z,'view',['class',0,'data-weui-theme',1],[],e,s,gg)
cs.push("./page/component/index.wxml:view:2:4")
var bCEB=_n('view')
_rz(z,bCEB,'class',2,e,s,gg)
cs.push("./page/component/index.wxml:view:3:6")
var oDEB=_n('view')
_rz(z,oDEB,'class',3,e,s,gg)
cs.push("./page/component/index.wxml:image:4:8")
var xEEB=_mz(z,'image',['class',4,'src',1],[],e,s,gg)
cs.pop()
_(oDEB,xEEB)
cs.push("./page/component/index.wxml:view:5:8")
var oFEB=_n('view')
_rz(z,oFEB,'class',6,e,s,gg)
var fGEB=_oz(z,7,e,s,gg)
_(oFEB,fGEB)
cs.push("./page/component/index.wxml:navigator:5:184")
var cHEB=_mz(z,'navigator',['class',8,'url',1],[],e,s,gg)
var hIEB=_oz(z,10,e,s,gg)
_(cHEB,hIEB)
cs.pop()
_(oFEB,cHEB)
var oJEB=_oz(z,11,e,s,gg)
_(oFEB,oJEB)
cs.pop()
_(oDEB,oFEB)
cs.pop()
_(bCEB,oDEB)
cs.push("./page/component/index.wxml:view:7:6")
var cKEB=_n('view')
_rz(z,cKEB,'class',12,e,s,gg)
cs.push("./page/component/index.wxml:view:8:8")
var oLEB=_n('view')
_rz(z,oLEB,'class',13,e,s,gg)
var lMEB=_v()
_(oLEB,lMEB)
cs.push("./page/component/index.wxml:block:9:10")
var aNEB=function(ePEB,tOEB,bQEB,gg){
cs.push("./page/component/index.wxml:block:9:10")
cs.push("./page/component/index.wxml:view:10:12")
var xSEB=_n('view')
_rz(z,xSEB,'class',16,ePEB,tOEB,gg)
cs.push("./page/component/index.wxml:view:11:14")
var oTEB=_mz(z,'view',['bindtap',17,'class',1,'id',2],[],ePEB,tOEB,gg)
cs.push("./page/component/index.wxml:view:12:16")
var cVEB=_n('view')
_rz(z,cVEB,'class',20,ePEB,tOEB,gg)
var hWEB=_oz(z,21,ePEB,tOEB,gg)
_(cVEB,hWEB)
cs.pop()
_(oTEB,cVEB)
var fUEB=_v()
_(oTEB,fUEB)
if(_oz(z,22,ePEB,tOEB,gg)){fUEB.wxVkey=1
cs.push("./page/component/index.wxml:image:13:16")
cs.push("./page/component/index.wxml:image:13:16")
var oXEB=_mz(z,'image',['class',23,'src',1],[],ePEB,tOEB,gg)
cs.pop()
_(fUEB,oXEB)
cs.pop()
}
else{fUEB.wxVkey=2
cs.push("./page/component/index.wxml:image:14:16")
cs.push("./page/component/index.wxml:image:14:16")
var cYEB=_mz(z,'image',['class',25,'src',1],[],ePEB,tOEB,gg)
cs.pop()
_(fUEB,cYEB)
cs.pop()
}
fUEB.wxXCkey=1
cs.pop()
_(xSEB,oTEB)
cs.push("./page/component/index.wxml:view:16:14")
var oZEB=_n('view')
_rz(z,oZEB,'class',27,ePEB,tOEB,gg)
cs.push("./page/component/index.wxml:view:17:16")
var l1EB=_n('view')
_rz(z,l1EB,'class',28,ePEB,tOEB,gg)
var a2EB=_v()
_(l1EB,a2EB)
cs.push("./page/component/index.wxml:block:18:18")
var t3EB=function(b5EB,e4EB,o6EB,gg){
cs.push("./page/component/index.wxml:block:18:18")
var o8EB=_v()
_(o6EB,o8EB)
if(_oz(z,32,b5EB,e4EB,gg)){o8EB.wxVkey=1
cs.push("./page/component/index.wxml:navigator:19:20")
cs.push("./page/component/index.wxml:navigator:19:20")
var f9EB=_mz(z,'navigator',['appId',33,'class',1,'extraData',2,'openType',3,'path',4,'target',5,'version',6],[],b5EB,e4EB,gg)
cs.push("./page/component/index.wxml:view:20:22")
var c0EB=_n('view')
_rz(z,c0EB,'class',40,b5EB,e4EB,gg)
var hAFB=_oz(z,41,b5EB,e4EB,gg)
_(c0EB,hAFB)
cs.pop()
_(f9EB,c0EB)
cs.push("./page/component/index.wxml:view:21:22")
var oBFB=_n('view')
_rz(z,oBFB,'class',42,b5EB,e4EB,gg)
cs.pop()
_(f9EB,oBFB)
cs.pop()
_(o8EB,f9EB)
cs.pop()
}
else{o8EB.wxVkey=2
cs.push("./page/component/index.wxml:navigator:23:20")
cs.push("./page/component/index.wxml:navigator:23:20")
var cCFB=_mz(z,'navigator',['class',43,'url',1],[],b5EB,e4EB,gg)
cs.push("./page/component/index.wxml:view:24:22")
var oDFB=_n('view')
_rz(z,oDFB,'class',45,b5EB,e4EB,gg)
var lEFB=_oz(z,46,b5EB,e4EB,gg)
_(oDFB,lEFB)
cs.pop()
_(cCFB,oDFB)
cs.push("./page/component/index.wxml:view:25:22")
var aFFB=_n('view')
_rz(z,aFFB,'class',47,b5EB,e4EB,gg)
cs.pop()
_(cCFB,aFFB)
cs.pop()
_(o8EB,cCFB)
cs.pop()
}
o8EB.wxXCkey=1
cs.pop()
return o6EB
}
_wp('./page/component/index.wxml:block:18:18: wx:key="*item" does not look like a valid key name.')
a2EB.wxXCkey=2
_2z(z,30,t3EB,ePEB,tOEB,gg,a2EB,'page','index','*item')
cs.pop()
cs.pop()
_(oZEB,l1EB)
cs.pop()
_(xSEB,oZEB)
cs.pop()
_(bQEB,xSEB)
cs.pop()
return bQEB
}
_wp('./page/component/index.wxml:block:9:10: wx:key="{{item.id}}" does not look like a valid key name (did you mean wx:key="id" ?)')
lMEB.wxXCkey=2
_2z(z,14,aNEB,e,s,gg,lMEB,'item','index','{{item.id}}')
cs.pop()
cs.pop()
_(cKEB,oLEB)
cs.pop()
_(bCEB,cKEB)
cs.pop()
_(eBEB,bCEB)
cs.pop()
_(r,eBEB)
return r
}
e_[x[45]]={f:m43,j:[],i:[],ti:[],ic:[]}
d_[x[46]]={}
var m44=function(e,s,r,gg){
var z=gz$7061636b616765436f6d706f6e656e742f_45()
cs.push("./page/extend/index.wxml:view:1:1")
var eHFB=_mz(z,'view',['class',0,'data-weui-theme',1],[],e,s,gg)
cs.push("./page/extend/index.wxml:view:6:7")
var bIFB=_n('view')
_rz(z,bIFB,'class',2,e,s,gg)
cs.push("./page/extend/index.wxml:image:7:6")
var oJFB=_mz(z,'image',['class',3,'src',1],[],e,s,gg)
cs.pop()
_(bIFB,oJFB)
cs.push("./page/extend/index.wxml:view:8:6")
var xKFB=_n('view')
_rz(z,xKFB,'class',5,e,s,gg)
var oLFB=_oz(z,6,e,s,gg)
_(xKFB,oLFB)
cs.push("./page/extend/index.wxml:navigator:8:161")
var fMFB=_mz(z,'navigator',['class',7,'url',1],[],e,s,gg)
var cNFB=_oz(z,9,e,s,gg)
_(fMFB,cNFB)
cs.pop()
_(xKFB,fMFB)
var hOFB=_oz(z,10,e,s,gg)
_(xKFB,hOFB)
cs.pop()
_(bIFB,xKFB)
cs.pop()
_(eHFB,bIFB)
cs.push("./page/extend/index.wxml:view:13:6")
var oPFB=_n('view')
_rz(z,oPFB,'class',11,e,s,gg)
cs.push("./page/extend/index.wxml:view:14:10")
var cQFB=_n('view')
_rz(z,cQFB,'class',12,e,s,gg)
var oRFB=_v()
_(cQFB,oRFB)
cs.push("./page/extend/index.wxml:block:15:14")
var lSFB=function(tUFB,aTFB,eVFB,gg){
cs.push("./page/extend/index.wxml:block:15:14")
cs.push("./page/extend/index.wxml:view:16:18")
var oXFB=_n('view')
_rz(z,oXFB,'class',15,tUFB,aTFB,gg)
cs.push("./page/extend/index.wxml:view:17:22")
var xYFB=_mz(z,'view',['bindtap',16,'class',1,'id',2],[],tUFB,aTFB,gg)
cs.push("./page/extend/index.wxml:view:18:26")
var oZFB=_n('view')
_rz(z,oZFB,'class',19,tUFB,aTFB,gg)
var f1FB=_oz(z,20,tUFB,aTFB,gg)
_(oZFB,f1FB)
cs.pop()
_(xYFB,oZFB)
cs.push("./page/extend/index.wxml:image:19:26")
var c2FB=_mz(z,'image',['class',21,'src',1],[],tUFB,aTFB,gg)
cs.pop()
_(xYFB,c2FB)
cs.pop()
_(oXFB,xYFB)
cs.push("./page/extend/index.wxml:view:21:22")
var h3FB=_n('view')
_rz(z,h3FB,'class',23,tUFB,aTFB,gg)
cs.push("./page/extend/index.wxml:view:22:26")
var o4FB=_n('view')
_rz(z,o4FB,'class',24,tUFB,aTFB,gg)
var c5FB=_v()
_(o4FB,c5FB)
cs.push("./page/extend/index.wxml:block:23:30")
var o6FB=function(a8FB,l7FB,t9FB,gg){
cs.push("./page/extend/index.wxml:block:23:30")
var bAGB=_v()
_(t9FB,bAGB)
if(_oz(z,28,a8FB,l7FB,gg)){bAGB.wxVkey=1
cs.push("./page/extend/index.wxml:navigator:24:34")
cs.push("./page/extend/index.wxml:navigator:24:34")
var oBGB=_mz(z,'navigator',['class',29,'url',1],[],a8FB,l7FB,gg)
cs.push("./page/extend/index.wxml:view:25:38")
var xCGB=_n('view')
_rz(z,xCGB,'class',31,a8FB,l7FB,gg)
var oDGB=_oz(z,32,a8FB,l7FB,gg)
_(xCGB,oDGB)
cs.pop()
_(oBGB,xCGB)
cs.push("./page/extend/index.wxml:view:26:38")
var fEGB=_n('view')
_rz(z,fEGB,'class',33,a8FB,l7FB,gg)
cs.pop()
_(oBGB,fEGB)
cs.pop()
_(bAGB,oBGB)
cs.pop()
}
else{bAGB.wxVkey=2
cs.push("./page/extend/index.wxml:navigator:28:34")
cs.push("./page/extend/index.wxml:navigator:28:34")
var cFGB=_mz(z,'navigator',['class',34,'url',1],[],a8FB,l7FB,gg)
cs.push("./page/extend/index.wxml:view:29:38")
var hGGB=_n('view')
_rz(z,hGGB,'class',36,a8FB,l7FB,gg)
var oHGB=_oz(z,37,a8FB,l7FB,gg)
_(hGGB,oHGB)
cs.pop()
_(cFGB,hGGB)
cs.push("./page/extend/index.wxml:view:30:38")
var cIGB=_n('view')
_rz(z,cIGB,'class',38,a8FB,l7FB,gg)
cs.pop()
_(cFGB,cIGB)
cs.pop()
_(bAGB,cFGB)
cs.pop()
}
bAGB.wxXCkey=1
cs.pop()
return t9FB
}
c5FB.wxXCkey=2
_2z(z,26,o6FB,tUFB,aTFB,gg,c5FB,'page','index','*this')
cs.pop()
cs.pop()
_(h3FB,o4FB)
cs.pop()
_(oXFB,h3FB)
cs.pop()
_(eVFB,oXFB)
cs.pop()
return eVFB
}
oRFB.wxXCkey=2
_2z(z,13,lSFB,e,s,gg,oRFB,'item','index','id')
cs.pop()
cs.pop()
_(oPFB,cQFB)
cs.pop()
_(eHFB,oPFB)
cs.push("./page/extend/index.wxml:view:39:6")
var oJGB=_n('view')
_rz(z,oJGB,'class',39,e,s,gg)
cs.pop()
_(eHFB,oJGB)
cs.pop()
_(r,eHFB)
return r
}
e_[x[46]]={f:m44,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
window.__wxml_comp_version__=0.02
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
var main=e_[path].f
cs=[]
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
if(typeof(window.__webview_engine_version__)!='undefined'&&window.__webview_engine_version__+1e-6>=0.02+1e-6&&window.__mergeData__)
{
env=window.__mergeData__(env,dd);
}
try{
main(env,{},root,global);
_tsd(root)
if(typeof(window.__webview_engine_version__)=='undefined'|| window.__webview_engine_version__+1e-6<0.01+1e-6){return _ev(root);}
}catch(err){
console.log(cs, env);
console.log(err)
throw err
}
return root;
}
}
}

