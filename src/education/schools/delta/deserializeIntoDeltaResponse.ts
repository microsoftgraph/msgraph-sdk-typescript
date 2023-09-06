import { createEducationSchoolFromDiscriminatorValue } from '../../../models/createEducationSchoolFromDiscriminatorValue';
import { deserializeIntoBaseDeltaFunctionResponse } from '../../../models/deserializeIntoBaseDeltaFunctionResponse';
import { type EducationSchool } from '../../../models/educationSchool';
import { serializeEducationSchool } from '../../../models/serializeEducationSchool';
import { type DeltaResponse } from './deltaResponse';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoDeltaResponse(deltaResponse: DeltaResponse | undefined = {} as DeltaResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseDeltaFunctionResponse(deltaResponse),
        "value": n => { deltaResponse.value = n.getCollectionOfObjectValues<EducationSchool>(createEducationSchoolFromDiscriminatorValue); },
    }
}
