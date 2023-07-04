import {DeviceInfo} from './deviceInfo';
import {MediaStream} from './mediaStream';
import {NetworkInfo} from './networkInfo';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface Media extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * Device information associated with the callee endpoint of this media.
     */
    calleeDevice?: DeviceInfo | undefined;
    /**
     * Network information associated with the callee endpoint of this media.
     */
    calleeNetwork?: NetworkInfo | undefined;
    /**
     * Device information associated with the caller endpoint of this media.
     */
    callerDevice?: DeviceInfo | undefined;
    /**
     * Network information associated with the caller endpoint of this media.
     */
    callerNetwork?: NetworkInfo | undefined;
    /**
     * How the media was identified during media negotiation stage.
     */
    label?: string | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * Network streams associated with this media.
     */
    streams?: MediaStream[] | undefined;
}
