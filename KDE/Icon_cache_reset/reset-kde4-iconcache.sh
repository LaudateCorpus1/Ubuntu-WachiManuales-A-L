#!/bin/sh


echo ""
echo "--------------------kde4 iconcache killer/deleter---------- "
echo -ne "[$USER@$HOSTNAME]"
cd $HOME/.kde4/cache-$HOSTNAME/  
echo "[$USER@$HOSTNAME]>cd $HOME/.kde4/cache-$HOSTNAME/ "
echo "[$USER@$HOSTNAME]>ls -al icon.cache.kcache"
ls -al icon-cache.kcache
echo "[$USER@$HOSTNAME]>rm -f  icon.cache.kcache"
rm -f  icon-cache.kcache 
echo "[$USER@$HOSTNAME]>ls -al icon.cache.kcache"
ls -al icon-cache.kcache
echo "[$USER@$HOSTNAME]>cd $HOME"
cd $HOME
echo "[$USER@$HOSTNAME]>"
echo "-----------------------finish now !------------------------------"

kdialog --msgbox 'Icon Cache resettet now ! :D \n thank you for using this script!'

exit


