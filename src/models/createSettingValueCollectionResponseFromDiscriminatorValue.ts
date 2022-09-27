import {SettingValueCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSettingValueCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : SettingValueCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SettingValueCollectionResponse();
}
