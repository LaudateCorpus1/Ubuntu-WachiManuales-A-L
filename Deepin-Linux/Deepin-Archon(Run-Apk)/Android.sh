#!/bin/bash

apk=$1
if [ -z $apk ];then
	echo "apk needed."
	exit 1
fi
ret=$(/usr/lib/node_modules/chromeos-apk/chromeos-apk --archon -t --scale --name "Android App" "$apk")
ret=${ret#Directory \" }
ret=${ret% \" created*}
/lastore/framework/myarchon/archonrun --silent-launch --load-and-launch-app=$ret

