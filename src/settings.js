import { editorCopy } from './lib/editorCopy';
import { editorCreate } from './lib/editorCreate';
import { editorSave } from './lib/editorSave';
import { permissionsCheck } from './lib/permissionsCheck';
import { permissionsRequest } from './lib/permissionsRequest';
import { permissionsToggle } from './lib/permissionsToggle';
import { permissionsWatch } from './lib/permissionsWatch';

permissionsCheck(permissionsToggle);
permissionsWatch(permissionsToggle);
permissionsRequest();
const editor = editorCreate();
editorSave(editor);
editorCopy(editor);

