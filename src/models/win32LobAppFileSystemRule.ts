import {Win32LobAppRule} from './index';
import {Win32LobAppFileSystemOperationType} from './win32LobAppFileSystemOperationType';
import {Win32LobAppRuleOperator} from './win32LobAppRuleOperator';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Win32LobAppFileSystemRule extends Win32LobAppRule implements Parsable {
    /** A value indicating whether to expand environment variables in the 32-bit context on 64-bit systems. */
    private _check32BitOn64System?: boolean | undefined;
    /** The file or folder comparison value. */
    private _comparisonValue?: string | undefined;
    /** The file or folder name to look up. */
    private _fileOrFolderName?: string | undefined;
    /** Contains all supported file system detection type. */
    private _operationType?: Win32LobAppFileSystemOperationType | undefined;
    /** Contains properties for detection operator. */
    private _operator?: Win32LobAppRuleOperator | undefined;
    /** The file or folder path to look up. */
    private _path?: string | undefined;
    /**
     * Gets the check32BitOn64System property value. A value indicating whether to expand environment variables in the 32-bit context on 64-bit systems.
     * @returns a boolean
     */
    public get check32BitOn64System() {
        return this._check32BitOn64System;
    };
    /**
     * Sets the check32BitOn64System property value. A value indicating whether to expand environment variables in the 32-bit context on 64-bit systems.
     * @param value Value to set for the check32BitOn64System property.
     */
    public set check32BitOn64System(value: boolean | undefined) {
        this._check32BitOn64System = value;
    };
    /**
     * Gets the comparisonValue property value. The file or folder comparison value.
     * @returns a string
     */
    public get comparisonValue() {
        return this._comparisonValue;
    };
    /**
     * Sets the comparisonValue property value. The file or folder comparison value.
     * @param value Value to set for the comparisonValue property.
     */
    public set comparisonValue(value: string | undefined) {
        this._comparisonValue = value;
    };
    /**
     * Instantiates a new Win32LobAppFileSystemRule and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the fileOrFolderName property value. The file or folder name to look up.
     * @returns a string
     */
    public get fileOrFolderName() {
        return this._fileOrFolderName;
    };
    /**
     * Sets the fileOrFolderName property value. The file or folder name to look up.
     * @param value Value to set for the fileOrFolderName property.
     */
    public set fileOrFolderName(value: string | undefined) {
        this._fileOrFolderName = value;
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
     * Gets the operationType property value. Contains all supported file system detection type.
     * @returns a win32LobAppFileSystemOperationType
     */
    public get operationType() {
        return this._operationType;
    };
    /**
     * Sets the operationType property value. Contains all supported file system detection type.
     * @param value Value to set for the operationType property.
     */
    public set operationType(value: Win32LobAppFileSystemOperationType | undefined) {
        this._operationType = value;
    };
    /**
     * Gets the operator property value. Contains properties for detection operator.
     * @returns a win32LobAppRuleOperator
     */
    public get operator() {
        return this._operator;
    };
    /**
     * Sets the operator property value. Contains properties for detection operator.
     * @param value Value to set for the operator property.
     */
    public set operator(value: Win32LobAppRuleOperator | undefined) {
        this._operator = value;
    };
    /**
     * Gets the path property value. The file or folder path to look up.
     * @returns a string
     */
    public get path() {
        return this._path;
    };
    /**
     * Sets the path property value. The file or folder path to look up.
     * @param value Value to set for the path property.
     */
    public set path(value: string | undefined) {
        this._path = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeBooleanValue("check32BitOn64System", this.check32BitOn64System);
        writer.writeStringValue("comparisonValue", this.comparisonValue);
        writer.writeStringValue("fileOrFolderName", this.fileOrFolderName);
        writer.writeEnumValue<Win32LobAppFileSystemOperationType>("operationType", this.operationType);
        writer.writeEnumValue<Win32LobAppRuleOperator>("operator", this.operator);
        writer.writeStringValue("path", this.path);
    };
}
