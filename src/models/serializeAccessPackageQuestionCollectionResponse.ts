import { type AccessPackageQuestion } from './accessPackageQuestion';
import { type AccessPackageQuestionCollectionResponse } from './accessPackageQuestionCollectionResponse';
import { serializeAccessPackageQuestion } from './serializeAccessPackageQuestion';
import { serializeBaseCollectionPaginationCountResponse } from './serializeBaseCollectionPaginationCountResponse';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeAccessPackageQuestionCollectionResponse(writer: SerializationWriter, accessPackageQuestionCollectionResponse: AccessPackageQuestionCollectionResponse | undefined = {} as AccessPackageQuestionCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, accessPackageQuestionCollectionResponse)
        writer.writeCollectionOfObjectValues<AccessPackageQuestion>("value", accessPackageQuestionCollectionResponse.value, serializeAccessPackageQuestion);
}
