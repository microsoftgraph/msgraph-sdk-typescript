import {createMailSearchFolderFromDiscriminatorValue} from './createMailSearchFolderFromDiscriminatorValue';
import {BaseCollectionPaginationCountResponse, MailSearchFolder} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class MailSearchFolderCollectionResponse extends BaseCollectionPaginationCountResponse implements Parsable {
    private _value?: MailSearchFolder[] | undefined;
    /**
     * Instantiates a new MailSearchFolderCollectionResponse and sets the default values.
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
            "value": n => { this.value = n.getCollectionOfObjectValues<MailSearchFolder>(createMailSearchFolderFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeCollectionOfObjectValues<MailSearchFolder>("value", this.value);
    };
    /**
     * Gets the value property value. 
     * @returns a mailSearchFolder
     */
    public get value() {
        return this._value;
    };
    /**
     * Sets the value property value. 
     * @param value Value to set for the value property.
     */
    public set value(value: MailSearchFolder[] | undefined) {
        this._value = value;
    };
}
