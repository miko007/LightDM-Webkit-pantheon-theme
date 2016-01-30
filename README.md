# Pantheon Theme
– for [lightdm-webkit2-greeter][1] *(v0.0.1)*

This project provides a theme for `lightdm-webkit2-greeter`, inspired by the `pantheon-greeter` as seen on
[elementary OS][2]. It is still work in progress, a lot of features are missing.

![](screenshot.png?raw=true)

## Demo
A live Demo can be found at https://pantheongreeter.mike-ochmann.de

## Installation
On Ubuntu, if you already have `lightdm-webkit2-greeter` installed, do the following:

```bash
cd /usr/share/lightdm-webkit/themes
git clone git@github.com:miko007/LightDM-Webkit-pantheon-theme.git pantheon
```
then edit the file `/etc/lightdm/lightdm-webkit2-greeter.conf` so it looks like this:

```bash
[greeter]
webkit-theme=pantheon
```
and do
```bash
sudo service lightdm restart
```

and you are done.

[1]: https://github.com/Antergos/lightdm-webkit2-greeter
[2]: https://elementary.io