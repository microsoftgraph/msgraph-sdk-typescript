import { createOrgContactFromDiscriminatorValue } from '../../models/createOrgContactFromDiscriminatorValue';
import { deserializeIntoBaseDeltaFunctionResponse } from '../../models/deserializeIntoBaseDeltaFunctionResponse';
import { type OrgContact } from '../../models/orgContact';
import { serializeOrgContact } from '../../models/serializeOrgContact';
import { type DeltaResponse } from './deltaResponse';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoDeltaResponse(deltaResponse: DeltaResponse | undefined = {} as DeltaResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseDeltaFunctionResponse(deltaResponse),
        "value": n => { deltaResponse.value = n.getCollectionOfObjectValues<OrgContact>(createOrgContactFromDiscriminatorValue); },
    }
}
