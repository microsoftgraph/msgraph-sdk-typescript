import {OmaSettingCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createOmaSettingCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : OmaSettingCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new OmaSettingCollectionResponse();
}
