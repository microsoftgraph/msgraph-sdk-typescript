import {createSubjectRightsRequestFromDiscriminatorValue} from './createSubjectRightsRequestFromDiscriminatorValue';
import {SubjectRightsRequestImpl} from './index';
import {Privacy} from './privacy';
import {SubjectRightsRequest} from './subjectRightsRequest';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class PrivacyImpl implements Privacy {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData?: Record<string, unknown> | undefined;
    /** The subjectRightsRequests property */
    private _subjectRightsRequests?: SubjectRightsRequest[] | undefined;
    /**
     * Gets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @returns a Record<string, unknown>
     */
    public get additionalData() {
        return this._additionalData;
    };
    /**
     * Sets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @param value Value to set for the AdditionalData property.
     */
    public set additionalData(value: Record<string, unknown> | undefined) {
        if(value) {
            this._additionalData = value;
        }
    };
    /**
     * Instantiates a new Privacy and sets the default values.
     * @param privacyParameterValue 
     */
    public constructor(privacyParameterValue?: Privacy | undefined) {
        this._additionalData = privacyParameterValue?.additionalData ? privacyParameterValue?.additionalData! : {};
        this._subjectRightsRequests = privacyParameterValue?.subjectRightsRequests;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "subjectRightsRequests": n => { this.subjectRightsRequests = n.getCollectionOfObjectValues<SubjectRightsRequestImpl>(createSubjectRightsRequestFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.subjectRightsRequests && this.subjectRightsRequests.length != 0){        const subjectRightsRequestsArrValue: SubjectRightsRequestImpl[] = [];
        this.subjectRightsRequests?.forEach(element => {
            subjectRightsRequestsArrValue.push((element instanceof SubjectRightsRequestImpl? element:new SubjectRightsRequestImpl(element)));
        });
            writer.writeCollectionOfObjectValues<SubjectRightsRequestImpl>("subjectRightsRequests", subjectRightsRequestsArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the subjectRightsRequests property value. The subjectRightsRequests property
     * @returns a SubjectRightsRequestInterface
     */
    public get subjectRightsRequests() {
        return this._subjectRightsRequests;
    };
    /**
     * Sets the subjectRightsRequests property value. The subjectRightsRequests property
     * @param value Value to set for the subjectRightsRequests property.
     */
    public set subjectRightsRequests(value: SubjectRightsRequest[] | undefined) {
        if(value) {
            const subjectRightsRequestsArrValue: SubjectRightsRequestImpl[] = [];
            this.subjectRightsRequests?.forEach(element => {
                subjectRightsRequestsArrValue.push((element instanceof SubjectRightsRequestImpl? element:new SubjectRightsRequestImpl(element)));
            });
            this._subjectRightsRequests = subjectRightsRequestsArrValue;
        }
    };
}
