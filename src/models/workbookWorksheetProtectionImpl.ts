import {createWorkbookWorksheetProtectionOptionsFromDiscriminatorValue} from './createWorkbookWorksheetProtectionOptionsFromDiscriminatorValue';
import {EntityImpl, WorkbookWorksheetProtectionOptionsImpl} from './index';
import {WorkbookWorksheetProtection} from './workbookWorksheetProtection';
import {WorkbookWorksheetProtectionOptions} from './workbookWorksheetProtectionOptions';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the drive singleton. */
export class WorkbookWorksheetProtectionImpl extends EntityImpl implements Parsable, WorkbookWorksheetProtection {
    /** Sheet protection options. Read-only. */
    public options?: WorkbookWorksheetProtectionOptions | undefined;
    /** Indicates if the worksheet is protected.  Read-only. */
    public protected?: boolean | undefined;
    /**
     * Instantiates a new workbookWorksheetProtection and sets the default values.
     * @param workbookWorksheetProtectionParameterValue 
     */
    public constructor(workbookWorksheetProtectionParameterValue?: WorkbookWorksheetProtection | undefined) {
        super();
        this.options = workbookWorksheetProtectionParameterValue?.options ;
        this.protected = workbookWorksheetProtectionParameterValue?.protected ;
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
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.options){
        writer.writeObjectValue<WorkbookWorksheetProtectionOptionsImpl>("options", new WorkbookWorksheetProtectionOptionsImpl(this.options));
        }
        if(this.protected){
        writer.writeBooleanValue("protected", this.protected);
        }
    };
}
