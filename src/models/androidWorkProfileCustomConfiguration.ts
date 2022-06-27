import {DeviceConfiguration} from './deviceConfiguration';
import {OmaSetting} from './omaSetting';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface AndroidWorkProfileCustomConfiguration extends DeviceConfiguration, Partial<Parsable> {
    /** OMA settings. This collection can contain a maximum of 500 elements. */
    omaSettings?: OmaSetting[] | undefined;
}
