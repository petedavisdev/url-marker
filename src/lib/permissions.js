import { permissionsCheck } from './permissionsCheck';
import { permissionsRequest } from './permissionsRequest';
import { permissionsToggle } from './permissionsToggle';
import { permissionsWatch } from './permissionsWatch';

export function permissions() {
	permissionsCheck(permissionsToggle);
	permissionsWatch(permissionsToggle);
	permissionsRequest();
}
