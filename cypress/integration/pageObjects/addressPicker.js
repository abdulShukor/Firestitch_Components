class addressPicker {
  LocationInput() {
    return cy.get("[name='Address Picker'] fs-address-autocomplete input");
  }
  EditableAddressLineOne() {
    return cy.get("[name='Address Picker']  .editable .line-1");
  }

  EditableAddressLineTwo() {
    return cy.get("[name='Address Picker']  .editable .line-2");
  }

  EditableAddressTwoLineAddress() {
    return cy.get("[name='Address Picker']  .editable ");
  }

  SelectOneLineAddress() {
    return cy.get("[name='Address Picker'] .oneline");
  }

  SaveButton() {
    return cy.get("[name='Address Picker'] mat-card  button");
  }
  AddPickerHint() {
    return cy.get("[name='Address Picker'] mat-form-field .mat-hint");
  }

  ContainerStreet() {
    return cy.get("mat-dialog-container .street");
  }

  ContainerAddress2() {
    return cy.get("mat-dialog-container .address2");
  }
  ContainerAddress3() {
    return cy.get("mat-dialog-container .address3");
  }
  ContainerZip() {
    return cy.get("mat-dialog-container  .zip");
  }

  ContainerCity() {
    return cy.get("mat-dialog-container  .city input");
  }

  ContainerRegion() {
    return cy.get("mat-dialog-container [name='region'] input");
  }

  ContainerCountr() {
    return cy.get("mat-dialog-container  .country input");
  }

  ContainerZoomIn() {
    return cy.get("[title='Zoom in']");
  }
  ContainerZoomOut() {
    return cy.get("[title='Zoom out']");
  }

  ContainerCenterAddressButton() {
    return cy.get(".mat-dialog-actions button:nth-child(2)");
  }
  ContainerCancelButton() {
    return cy.get(".mat-dialog-actions button:nth-child(3)");
  }

  ContainerApplyButton() {
    return cy.get("mat-dialog-container [type='submit']");
  }

  ContainerOverlayBackdrop() {
    return cy.get(".cdk-overlay-backdrop");
  }

  ContainerTwoTitleText() {
    return cy.get(".fs-modal-confirm .mat-dialog-title");
  }
  ContainerTwoContentText() {
    return cy.get(".fs-modal-confirm .mat-dialog-content");
  }

  ContainerTwoSaveChangeButton() {
    return cy.get(".fs-modal-confirm .mat-primary");
  }
  ContainerTwoDiscardChangesAndContinue() {
    return cy.get(".fs-modal-confirm [type='button']:nth-child(2)");
  }

  Container() {
    return cy.get("mat-dialog-container");
  }
  ContainerTwoReviewChanges() {
    return cy.get(".fs-modal-confirm [type='button']:nth-child(3)");
  }
}

export default addressPicker;
