_.mixin({parseIntCloneDeep:function(e,t){t=t||10;var n;var r=_.cloneDeep(e,function(e){if(!_.isString(e)){return undefined}n=parseInt(e,t);if(typeof n==="number"&&!_.isNaN(n)){return n}else{return undefined}});return r}})
