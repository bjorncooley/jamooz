<?php
/**
 * The base configurations of the WordPress.
 *
 * This file has the following configurations: MySQL settings, Table Prefix,
 * Secret Keys, and ABSPATH. You can find more information by visiting
 * {@link https://codex.wordpress.org/Editing_wp-config.php Editing wp-config.php}
 * Codex page. You can get the MySQL settings from your web host.
 *
 * This file is used by the wp-config.php creation script during the
 * installation. You don't have to use the web site, you can just copy this file
 * to "wp-config.php" and fill in the values.
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'livephil_jamooz');

/** MySQL database username */
define('DB_USER', 'admin');

/** MySQL database password */
define('DB_PASSWORD', 'admin');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         '*2+O$8cv_##npCO0lBDUi73PJCud-N,GK+fH9gS2C(v8lnZ/:aM-V8xYIb;rn0v=');
define('SECURE_AUTH_KEY',  'Kv-Wt|VX={{MtDFEM!5W}NK/()lLH1P30pQ0R|F>ezJ#OeaaRv]o0/g!:fO]:&F$');
define('LOGGED_IN_KEY',    'lh%|WH:=[mDV>s$5RE!6vJ0rcw+ZdEkO1gnZnS{O3@jUAY`H<x_bM]h:uL<$qs):');
define('NONCE_KEY',        'A.s:8MUPw2y*]&CdO+Or55v8$tcfqz9*[FBHSu_TP/V@kAh7s#g+P$}JH#N#+d}>');
define('AUTH_SALT',        'y bD-_IoX[-S|8F5WYZv*RYa5a+Qj|e8@L[o]V]7DB<Ri IeKOt@E/=Gs%;/7Py8');
define('SECURE_AUTH_SALT', '>z|HqNCO7:*r|H!Z1V!.BRuKm;7<EWL0$:k6_>B:~7<cy^|Wv[FuVD+^?DtBasKl');
define('LOGGED_IN_SALT',   '6iMT/co2F{fbO[ioGW(TzN&f(.K={/n^Ueq9_8-Eu%|!KY[^6#e,Vs-O(EDAAAH/');
define('NONCE_SALT',       'x,`/@bh?#Sfm!4<ojF<bB|q!kKf{s1NBCp|_{rt`{TF.}fa_2g~B+4y6$m[9-D8!');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each a unique
 * prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
