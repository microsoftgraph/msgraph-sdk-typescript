import {LocalizedLabelCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createLocalizedLabelCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : LocalizedLabelCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new LocalizedLabelCollectionResponse();
}
