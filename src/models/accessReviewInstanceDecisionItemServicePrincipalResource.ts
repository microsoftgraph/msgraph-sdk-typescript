import {AccessReviewInstanceDecisionItemResource} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AccessReviewInstanceDecisionItemServicePrincipalResource extends AccessReviewInstanceDecisionItemResource implements Parsable {
    /** The appId property */
    private _appId?: string | undefined;
    /**
     * Gets the appId property value. The appId property
     * @returns a string
     */
    public get appId() {
        return this._appId;
    };
    /**
     * Sets the appId property value. The appId property
     * @param value Value to set for the appId property.
     */
    public set appId(value: string | undefined) {
        this._appId = value;
    };
    /**
     * Instantiates a new AccessReviewInstanceDecisionItemServicePrincipalResource and sets the default values.
     */
    public constructor() {
        super();
        this.odataType = "#microsoft.graph.accessReviewInstanceDecisionItemServicePrincipalResource";
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "appId": n => { this.appId = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("appId", this.appId);
    };
}
