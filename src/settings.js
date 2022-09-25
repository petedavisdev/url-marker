import { checkPermissions } from './lib/checkPermissions';
import { createSettingsEditor } from './lib/createSettingsEditor';
import { requestPermissions } from './lib/requestPermissions';
import { saveSettings } from './lib/saveSettings';
import { toggleSettings } from './lib/toggleSettings';

checkPermissions(toggleSettings);

chrome.permissions.onAdded.addListener(() => checkPermissions(toggleSettings));

requestPermissions();
const settingsEditor = createSettingsEditor();
saveSettings(settingsEditor);
