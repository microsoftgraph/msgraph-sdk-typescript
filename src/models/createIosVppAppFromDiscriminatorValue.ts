import { deserializeIntoIosVppApp } from './deserializeIntoIosVppApp';
import { type IosVppApp } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createIosVppAppFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoIosVppApp;
}
