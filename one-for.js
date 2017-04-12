<script>
	function oneFor() {
		var arr=[6,5,4,3,2,1];
		var j = arr.length;
		var i=0;
		for(i = 0;i<j-1;i++){
			if(arr[i]>arr[i+1]){
				var m = arr[i+1];
				arr[i+1] = arr[i];
				arr[i] = m;
			}
			if(i==j-2){
				i=-1;
				j--;
			}
		}
		console.log(arr)
	}
	oneFor();
</script>	
