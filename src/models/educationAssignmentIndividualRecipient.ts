import {EducationAssignmentRecipient} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class EducationAssignmentIndividualRecipient extends EducationAssignmentRecipient implements Parsable {
    /** A collection of ids of the recipients. */
    private _recipients?: string[] | undefined;
    /**
     * Instantiates a new EducationAssignmentIndividualRecipient and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "recipients": n => { this.recipients = n.getCollectionOfPrimitiveValues<string>(); },
        };
    };
    /**
     * Gets the recipients property value. A collection of ids of the recipients.
     * @returns a string
     */
    public get recipients() {
        return this._recipients;
    };
    /**
     * Sets the recipients property value. A collection of ids of the recipients.
     * @param value Value to set for the recipients property.
     */
    public set recipients(value: string[] | undefined) {
        this._recipients = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeCollectionOfPrimitiveValues<string>("recipients", this.recipients);
    };
}
