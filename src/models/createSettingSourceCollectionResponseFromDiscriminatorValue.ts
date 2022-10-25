import {SettingSourceCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSettingSourceCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : SettingSourceCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SettingSourceCollectionResponse();
}
