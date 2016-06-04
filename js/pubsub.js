var PubSub = (function(){
	var events = {};
	function sub(eventName, fn){
			this.events[eventName] = this.events[eventName] || [];
			this.event[eventName].push(fn);
	}
	function pub(eventName, data){
		if(this.events[eventName]){
			this,events[eventName].forEach(function(fn){
				fn(data);
			});
		}
	}
	return {
		on: sub,
		emit: pub
	}
});
