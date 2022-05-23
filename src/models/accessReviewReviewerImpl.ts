import {AccessReviewReviewer} from './accessReviewReviewer';
import {EntityImpl} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the identityGovernance singleton. */
export class AccessReviewReviewerImpl extends EntityImpl implements AccessReviewReviewer, Parsable {
    /** The date when the reviewer was added for the access review. */
    public createdDateTime?: Date | undefined;
    /** Name of reviewer. */
    public displayName?: string | undefined;
    /** User principal name of the user. */
    public userPrincipalName?: string | undefined;
    /**
     * Instantiates a new accessReviewReviewer and sets the default values.
     * @param accessReviewReviewerParameterValue 
     */
    public constructor(accessReviewReviewerParameterValue?: AccessReviewReviewer | undefined) {
        super();
        this.createdDateTime = accessReviewReviewerParameterValue?.createdDateTime ;
        this.displayName = accessReviewReviewerParameterValue?.displayName ;
        this.userPrincipalName = accessReviewReviewerParameterValue?.userPrincipalName ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "createdDateTime": n => { this.createdDateTime = n.getDateValue(); },
            "displayName": n => { this.displayName = n.getStringValue(); },
            "userPrincipalName": n => { this.userPrincipalName = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.createdDateTime){
        writer.writeDateValue("createdDateTime", this.createdDateTime);
        }
        if(this.displayName){
        writer.writeStringValue("displayName", this.displayName);
        }
        if(this.userPrincipalName){
        writer.writeStringValue("userPrincipalName", this.userPrincipalName);
        }
    };
}
