import {deserializeIntoOmaSetting} from './deserializeIntoOmaSetting';
import {deserializeIntoOmaSettingBase64} from './deserializeIntoOmaSettingBase64';
import {deserializeIntoOmaSettingBoolean} from './deserializeIntoOmaSettingBoolean';
import {deserializeIntoOmaSettingDateTime} from './deserializeIntoOmaSettingDateTime';
import {deserializeIntoOmaSettingFloatingPoint} from './deserializeIntoOmaSettingFloatingPoint';
import {deserializeIntoOmaSettingInteger} from './deserializeIntoOmaSettingInteger';
import {deserializeIntoOmaSettingString} from './deserializeIntoOmaSettingString';
import {deserializeIntoOmaSettingStringXml} from './deserializeIntoOmaSettingStringXml';
import {OmaSetting, OmaSettingBase64, OmaSettingBoolean, OmaSettingDateTime, OmaSettingFloatingPoint, OmaSettingInteger, OmaSettingString, OmaSettingStringXml} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createOmaSettingFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.omaSettingBase64":
                    return deserializeIntoOmaSettingBase64;
                case "#microsoft.graph.omaSettingBoolean":
                    return deserializeIntoOmaSettingBoolean;
                case "#microsoft.graph.omaSettingDateTime":
                    return deserializeIntoOmaSettingDateTime;
                case "#microsoft.graph.omaSettingFloatingPoint":
                    return deserializeIntoOmaSettingFloatingPoint;
                case "#microsoft.graph.omaSettingInteger":
                    return deserializeIntoOmaSettingInteger;
                case "#microsoft.graph.omaSettingString":
                    return deserializeIntoOmaSettingString;
                case "#microsoft.graph.omaSettingStringXml":
                    return deserializeIntoOmaSettingStringXml;
            }
        }
    }
    return deserializeIntoOmaSetting;
}
