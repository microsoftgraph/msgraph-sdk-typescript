import { type BaseDeltaFunctionResponse } from '../../models/baseDeltaFunctionResponse';
import { type ServicePrincipal } from '../../models/servicePrincipal';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface DeltaResponse extends BaseDeltaFunctionResponse, Parsable {
    /**
     * The value property
     */
    value?: ServicePrincipal[] | undefined;
}
