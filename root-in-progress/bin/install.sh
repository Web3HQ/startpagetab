#!/bin/bash

$maysudo=""

if [ "$is_root" = "false" ]
   then
      $maysudo="sudo"
   else
      $maysudo=""
fi

echo "Moving files..."
$maysudo cp -r -f --preserve=all . /usr/lib/floflis/browser
chmod +x /usr/lib/floflis/browser/flobrowser
mkdir /home/daniell/.mozilla/native-messaging-hosts
$maysudo mv -f /usr/lib/floflis/browser/floflis_browser.json /home/daniell/.mozilla/native-messaging-hosts
echo "Installed."
