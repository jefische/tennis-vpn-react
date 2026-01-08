# Tennis VPN Blog - Total Tennis TV

A React-based website that helps users discover how to watch major tennis tournaments online. The site provides streaming guides, VPN recommendations, tournament schedules, historical draw results, and betting odds for Grand Slam events.

## Features

- **Tournament Streaming Guides** - Detailed guides on how to watch each Grand Slam (Australian Open, French Open, Wimbledon, US Open) and other major tournaments
- **Interactive Draw Browser** - View historical tournament brackets and match results by round
- **Betting Odds Display** - American and decimal odds comparison for tournament favorites
- **VPN Affiliate Links** - Recommendations for accessing geo-restricted tennis broadcasts
- **Responsive Design** - Built with Bootstrap and custom SCSS styling

## Tech Stack

- **React 18** with React Router for SPA navigation
- **Vite** for fast development and building
- **SCSS/Sass** for styling
- **FontAwesome** for icons
- **Flickity** for carousel components

## Data Sources

Tournament draw results are compiled from:

- Tennis Abstract data repository: https://github.com/JeffSackmann/tennis_slam_pointbypoint
- UK based tennis and betting match results website: http://tennis-data.co.uk/alldata.php

## Getting Started

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview
```

## Project Structure

- `src/` - React components, pages, and styles
- `data/` - Tournament match data (CSV files) and configuration data (JS/JSON)
- `public/flags/` - Country flag assets

## How To Renew Let's Encrypt SSL Certificate on Namecheap

Run the following terminal command in cPanel:

```bash
.acme.sh/acme.sh --issue -d totaltennis.tv -d www.totaltennis.tv -w /home/tennitng/public_html/ --server letsencrypt --force
```

Then in cPanel go to File Manager -> .acme.sh -> totaltennis.tv_ecc and copy the content from totaltennis.tv.cer and totaltennis.tv.key

Finally under SSL/TLS -> Manage SSL Hosts select the totaltennis.tv domain and paste certificate and private key into the appropriate fields. Click Install Certificate.

Check if my SSL certificate is correctly working:
https://wphowknow.com/ssl-checker/

More info on how to setup the certificate:
https://community.letsencrypt.org/t/ssl-certificate-on-namecheap/210647
