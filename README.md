# Tennis VPN Blog

This repository uses react.js and twitter bootstrap to implement a tennis vpn blog and affilate website.

Tournament draw results are compiled from: <br>
Tennis Abstract data repository: https://github.com/JeffSackmann/tennis_slam_pointbypoint <br>
UK based tennis and betting match results website: http://tennis-data.co.uk/alldata.php

# How To renew letsencrypt SSL certificate on Namecheap

Run the following terminal command in cPanel:
.acme.sh/acme.sh --issue -d totaltennis.tv -d www.totaltennis.tv -w /home/tennitng/public_html/ --server letsencrypt --force

Check if my SSL certificate is correctly working:
https://wphowknow.com/ssl-checker/

More info on how to setup the certificate:
https://community.letsencrypt.org/t/ssl-certificate-on-namecheap/210647
