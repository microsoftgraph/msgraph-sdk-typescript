import {AccessReviewQueryScope} from './index';
import {Duration, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AccessReviewInactiveUsersQueryScope extends AccessReviewQueryScope implements Parsable {
    /** Defines the duration of inactivity. Inactivity is based on the last sign in date of the user compared to the access review instance's start date. If this property is not specified, it's assigned the default value PT0S. */
    private _inactiveDuration?: Duration | undefined;
    /**
     * Instantiates a new AccessReviewInactiveUsersQueryScope and sets the default values.
     */
    public constructor() {
        super();
        this.odataType = "#microsoft.graph.accessReviewInactiveUsersQueryScope";
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "inactiveDuration": n => { this.inactiveDuration = n.getDurationValue(); },
        };
    };
    /**
     * Gets the inactiveDuration property value. Defines the duration of inactivity. Inactivity is based on the last sign in date of the user compared to the access review instance's start date. If this property is not specified, it's assigned the default value PT0S.
     * @returns a Duration
     */
    public get inactiveDuration() {
        return this._inactiveDuration;
    };
    /**
     * Sets the inactiveDuration property value. Defines the duration of inactivity. Inactivity is based on the last sign in date of the user compared to the access review instance's start date. If this property is not specified, it's assigned the default value PT0S.
     * @param value Value to set for the inactiveDuration property.
     */
    public set inactiveDuration(value: Duration | undefined) {
        this._inactiveDuration = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeDurationValue("inactiveDuration", this.inactiveDuration);
    };
}
