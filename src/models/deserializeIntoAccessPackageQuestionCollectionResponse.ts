import {AccessPackageQuestion} from './accessPackageQuestion';
import {AccessPackageQuestionCollectionResponse} from './accessPackageQuestionCollectionResponse';
import {createAccessPackageQuestionFromDiscriminatorValue} from './createAccessPackageQuestionFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {serializeAccessPackageQuestion} from './serializeAccessPackageQuestion';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAccessPackageQuestionCollectionResponse(accessPackageQuestionCollectionResponse: AccessPackageQuestionCollectionResponse | undefined = {} as AccessPackageQuestionCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(accessPackageQuestionCollectionResponse),
        "value": n => { accessPackageQuestionCollectionResponse.value = n.getCollectionOfObjectValues<AccessPackageQuestion>(createAccessPackageQuestionFromDiscriminatorValue); },
    }
}
