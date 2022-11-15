import {DisplayNameLocalizationCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDisplayNameLocalizationCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : DisplayNameLocalizationCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DisplayNameLocalizationCollectionResponse();
}
