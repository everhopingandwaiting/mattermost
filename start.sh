cd /workspaces/mattermost/server
 make run-server


 cd /workspaces/mattermost/webapp

npm i
make run


## tar 

tar -zcvf /tmp/mm_server_all.tar.gz server/bin/mattermost server/bin/mmctl server/templates server/i18n server/fonts/ server/config/config.json server/client webapp/channels/dist server/plugins/