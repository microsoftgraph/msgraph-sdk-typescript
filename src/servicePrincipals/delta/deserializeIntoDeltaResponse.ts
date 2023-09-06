import { createServicePrincipalFromDiscriminatorValue } from '../../models/createServicePrincipalFromDiscriminatorValue';
import { deserializeIntoBaseDeltaFunctionResponse } from '../../models/deserializeIntoBaseDeltaFunctionResponse';
import { serializeServicePrincipal } from '../../models/serializeServicePrincipal';
import { type ServicePrincipal } from '../../models/servicePrincipal';
import { type DeltaResponse } from './deltaResponse';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoDeltaResponse(deltaResponse: DeltaResponse | undefined = {} as DeltaResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseDeltaFunctionResponse(deltaResponse),
        "value": n => { deltaResponse.value = n.getCollectionOfObjectValues<ServicePrincipal>(createServicePrincipalFromDiscriminatorValue); },
    }
}
