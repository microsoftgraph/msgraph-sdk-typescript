import {Win32LobAppRuleImpl} from './index';
import {Win32LobAppFileSystemOperationType} from './win32LobAppFileSystemOperationType';
import {Win32LobAppFileSystemRule} from './win32LobAppFileSystemRule';
import {Win32LobAppRuleOperator} from './win32LobAppRuleOperator';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Win32LobAppFileSystemRuleImpl extends Win32LobAppRuleImpl implements Win32LobAppFileSystemRule {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** A value indicating whether to expand environment variables in the 32-bit context on 64-bit systems. */
    public check32BitOn64System?: boolean | undefined;
    /** The file or folder comparison value. */
    public comparisonValue?: string | undefined;
    /** The file or folder name to look up. */
    public fileOrFolderName?: string | undefined;
    /** The file system operation type. Possible values are: notConfigured, exists, modifiedDate, createdDate, version, sizeInMB, doesNotExist. */
    public operationType?: Win32LobAppFileSystemOperationType | undefined;
    /** The operator for file or folder detection. Possible values are: notConfigured, equal, notEqual, greaterThan, greaterThanOrEqual, lessThan, lessThanOrEqual. */
    public operator?: Win32LobAppRuleOperator | undefined;
    /** The file or folder path to look up. */
    public path?: string | undefined;
    /**
     * Instantiates a new Win32LobAppFileSystemRule and sets the default values.
     * @param win32LobAppFileSystemRuleParameterValue 
     */
    public constructor(win32LobAppFileSystemRuleParameterValue?: Win32LobAppFileSystemRule | undefined) {
        super(win32LobAppFileSystemRuleParameterValue);
        this.additionalData = win32LobAppFileSystemRuleParameterValue?.additionalData ? win32LobAppFileSystemRuleParameterValue?.additionalData! : {};
        this.check32BitOn64System = win32LobAppFileSystemRuleParameterValue?.check32BitOn64System;
        this.comparisonValue = win32LobAppFileSystemRuleParameterValue?.comparisonValue;
        this.fileOrFolderName = win32LobAppFileSystemRuleParameterValue?.fileOrFolderName;
        this.operationType = win32LobAppFileSystemRuleParameterValue?.operationType;
        this.operator = win32LobAppFileSystemRuleParameterValue?.operator;
        this.path = win32LobAppFileSystemRuleParameterValue?.path;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "check32BitOn64System": n => { this.check32BitOn64System = n.getBooleanValue(); },
            "comparisonValue": n => { this.comparisonValue = n.getStringValue(); },
            "fileOrFolderName": n => { this.fileOrFolderName = n.getStringValue(); },
            "operationType": n => { this.operationType = n.getEnumValue<Win32LobAppFileSystemOperationType>(Win32LobAppFileSystemOperationType); },
            "operator": n => { this.operator = n.getEnumValue<Win32LobAppRuleOperator>(Win32LobAppRuleOperator); },
            "path": n => { this.path = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.check32BitOn64System){
            writer.writeBooleanValue("check32BitOn64System", this.check32BitOn64System);
        }
        if(this.comparisonValue){
            writer.writeStringValue("comparisonValue", this.comparisonValue);
        }
        if(this.fileOrFolderName){
            writer.writeStringValue("fileOrFolderName", this.fileOrFolderName);
        }
        if(this.operationType){
            writer.writeEnumValue<Win32LobAppFileSystemOperationType>("operationType", this.operationType);
        }
        if(this.operator){
            writer.writeEnumValue<Win32LobAppRuleOperator>("operator", this.operator);
        }
        if(this.path){
            writer.writeStringValue("path", this.path);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
