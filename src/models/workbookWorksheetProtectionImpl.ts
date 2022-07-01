import {createWorkbookWorksheetProtectionOptionsFromDiscriminatorValue} from './createWorkbookWorksheetProtectionOptionsFromDiscriminatorValue';
import {EntityImpl, WorkbookWorksheetProtectionOptionsImpl} from './index';
import {WorkbookWorksheetProtection} from './workbookWorksheetProtection';
import {WorkbookWorksheetProtectionOptions} from './workbookWorksheetProtectionOptions';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the collection of application entities. */
export class WorkbookWorksheetProtectionImpl extends EntityImpl implements WorkbookWorksheetProtection {
    /** Sheet protection options. Read-only. */
    private _options?: WorkbookWorksheetProtectionOptions | undefined;
    /** Indicates if the worksheet is protected.  Read-only. */
    private _protected?: boolean | undefined;
    /**
     * Instantiates a new workbookWorksheetProtection and sets the default values.
     * @param workbookWorksheetProtectionParameterValue 
     */
    public constructor(workbookWorksheetProtectionParameterValue?: WorkbookWorksheetProtection | undefined) {
        super(workbookWorksheetProtectionParameterValue);
        this._options = workbookWorksheetProtectionParameterValue?.options;
        this._protected = workbookWorksheetProtectionParameterValue?.protected;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "options": n => { this.options = n.getObjectValue<WorkbookWorksheetProtectionOptionsImpl>(createWorkbookWorksheetProtectionOptionsFromDiscriminatorValue); },
            "protected": n => { this.protected = n.getBooleanValue(); },
        };
    };
    /**
     * Gets the options property value. Sheet protection options. Read-only.
     * @returns a WorkbookWorksheetProtectionOptionsInterface
     */
    public get options() {
        return this._options;
    };
    /**
     * Sets the options property value. Sheet protection options. Read-only.
     * @param value Value to set for the options property.
     */
    public set options(value: WorkbookWorksheetProtectionOptions | undefined) {
        if(value) {
            this._options = value instanceof WorkbookWorksheetProtectionOptionsImpl? value as WorkbookWorksheetProtectionOptionsImpl: new WorkbookWorksheetProtectionOptionsImpl(value);
        }
    };
    /**
     * Gets the protected property value. Indicates if the worksheet is protected.  Read-only.
     * @returns a boolean
     */
    public get protected() {
        return this._protected;
    };
    /**
     * Sets the protected property value. Indicates if the worksheet is protected.  Read-only.
     * @param value Value to set for the protected property.
     */
    public set protected(value: boolean | undefined) {
        if(value) {
            this._protected = value;
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.options){
            writer.writeObjectValue<WorkbookWorksheetProtectionOptionsImpl>("options", (this.options instanceof WorkbookWorksheetProtectionOptionsImpl? this.options as WorkbookWorksheetProtectionOptionsImpl: new WorkbookWorksheetProtectionOptionsImpl(this.options)));
        }
        if(this.protected){
            writer.writeBooleanValue("protected", this.protected);
        }
    };
}
