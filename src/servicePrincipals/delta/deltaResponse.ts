import {BaseDeltaFunctionResponse} from '../../models/baseDeltaFunctionResponse';
import {ServicePrincipal} from '../../models/servicePrincipal';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface DeltaResponse extends BaseDeltaFunctionResponse, Parsable {
    /** The value property */
    value?: ServicePrincipal[] | undefined;
}
