import type {DeviceConfiguration} from './deviceConfiguration';
import type {OmaSetting} from './omaSetting';
import type {Parsable} from '@microsoft/kiota-abstractions';

export interface Windows10CustomConfiguration extends DeviceConfiguration, Parsable {
    /**
     * OMA settings. This collection can contain a maximum of 1000 elements.
     */
    omaSettings?: OmaSetting[] | undefined;
}
