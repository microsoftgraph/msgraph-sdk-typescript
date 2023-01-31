import {createAccessReviewStageSettingsFromDiscriminatorValue} from './createAccessReviewStageSettingsFromDiscriminatorValue';
import {AccessReviewStageSettings, BaseCollectionPaginationCountResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AccessReviewStageSettingsCollectionResponse extends BaseCollectionPaginationCountResponse implements Parsable {
    private _value?: AccessReviewStageSettings[] | undefined;
    /**
     * Instantiates a new AccessReviewStageSettingsCollectionResponse and sets the default values.
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
            "value": n => { this.value = n.getCollectionOfObjectValues<AccessReviewStageSettings>(createAccessReviewStageSettingsFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeCollectionOfObjectValues<AccessReviewStageSettings>("value", this.value);
    };
    /**
     * Gets the value property value. 
     * @returns a accessReviewStageSettings
     */
    public get value() {
        return this._value;
    };
    /**
     * Sets the value property value. 
     * @param value Value to set for the value property.
     */
    public set value(value: AccessReviewStageSettings[] | undefined) {
        this._value = value;
    };
}
