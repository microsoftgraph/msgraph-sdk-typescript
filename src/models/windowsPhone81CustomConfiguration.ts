import {DeviceConfiguration} from './deviceConfiguration';
import {OmaSetting} from './omaSetting';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface WindowsPhone81CustomConfiguration extends DeviceConfiguration, Parsable {
    /**
     * OMA settings. This collection can contain a maximum of 1000 elements.
     */
    omaSettings?: OmaSetting[] | undefined;
}
