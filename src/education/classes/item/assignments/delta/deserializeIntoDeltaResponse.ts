import { createEducationAssignmentFromDiscriminatorValue } from '../../../../../models/createEducationAssignmentFromDiscriminatorValue';
import { deserializeIntoBaseDeltaFunctionResponse } from '../../../../../models/deserializeIntoBaseDeltaFunctionResponse';
import { type EducationAssignment } from '../../../../../models/educationAssignment';
import { serializeEducationAssignment } from '../../../../../models/serializeEducationAssignment';
import { type DeltaResponse } from './deltaResponse';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoDeltaResponse(deltaResponse: DeltaResponse | undefined = {} as DeltaResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseDeltaFunctionResponse(deltaResponse),
        "value": n => { deltaResponse.value = n.getCollectionOfObjectValues<EducationAssignment>(createEducationAssignmentFromDiscriminatorValue); },
    }
}
