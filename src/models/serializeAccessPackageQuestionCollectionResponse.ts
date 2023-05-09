import {AccessPackageQuestion} from './accessPackageQuestion';
import {AccessPackageQuestionCollectionResponse} from './accessPackageQuestionCollectionResponse';
import {serializeAccessPackageQuestion} from './serializeAccessPackageQuestion';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAccessPackageQuestionCollectionResponse(writer: SerializationWriter, accessPackageQuestionCollectionResponse: AccessPackageQuestionCollectionResponse | undefined = {} as AccessPackageQuestionCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, accessPackageQuestionCollectionResponse)
        writer.writeCollectionOfObjectValues<AccessPackageQuestion>("value", accessPackageQuestionCollectionResponse.value, serializeAccessPackageQuestion);
}
