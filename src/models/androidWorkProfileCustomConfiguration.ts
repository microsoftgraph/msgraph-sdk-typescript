import { type DeviceConfiguration } from './deviceConfiguration';
import { type OmaSetting } from './omaSetting';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface AndroidWorkProfileCustomConfiguration extends DeviceConfiguration, Parsable {
    /**
     * OMA settings. This collection can contain a maximum of 500 elements.
     */
    omaSettings?: OmaSetting[] | undefined;
}
