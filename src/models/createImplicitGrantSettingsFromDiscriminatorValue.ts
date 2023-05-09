import {deserializeIntoImplicitGrantSettings} from './deserializeIntoImplicitGrantSettings';
import {ImplicitGrantSettings} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createImplicitGrantSettingsFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoImplicitGrantSettings;
}
