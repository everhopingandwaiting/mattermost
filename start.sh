cd /workspaces/mattermost/server
 make run-server


 cd /workspaces/mattermost/webapp

npm i
make run


## tar 
#  rm /tmp/mm_server_all.tar.gz 
 rm server/bin/darwin_amd64/ -r
 rm server/bin/darwin_arm64/ -r
 rm -r server/bin/windows_amd64/
 rm -r server/bin/linux_arm64/

# tar -zcvf /tmp/mm_server_all.tar.gz server/bin/mattermost server/bin/mmctl server/templates server/i18n server/fonts/ server/config/config.json server/client webapp/channels/dist server/plugins/


# tar -zcvf /tmp/mm_server_all_arm64.tar.gz server/bin/linux_arm64/mattermost server/bin/linux_arm64/mmctl server/templates server/i18n server/fonts/ server/config/config.json server/client webapp/channels/dist server/plugins/