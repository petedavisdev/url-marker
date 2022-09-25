import { checkPermissions } from './lib/checkPermissions';
import { copySettings } from './lib/copySettings';
import { createSettingsEditor } from './lib/createSettingsEditor';
import { requestPermissions } from './lib/requestPermissions';
import { saveSettings } from './lib/saveSettings';
import { toggleSettings } from './lib/toggleSettings';
import { watchPermissions } from './lib/watchPermissions';

checkPermissions(toggleSettings);
watchPermissions(toggleSettings);
requestPermissions();
const settingsEditor = createSettingsEditor();
saveSettings(settingsEditor);
copySettings(settingsEditor);

