import {EntityImpl} from './index';
import {WorkbookFunctions} from './workbookFunctions';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Casts the previous resource to user. */
export class WorkbookFunctionsImpl extends EntityImpl implements Parsable, WorkbookFunctions {
    /**
     * Instantiates a new workbookFunctions and sets the default values.
     * @param workbookFunctionsParameterValue 
     */
    public constructor(workbookFunctionsParameterValue?: WorkbookFunctions | undefined) {
        super();
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
    };
}
